import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

import { queryBuilder } from "../helpers";

// patients
const fetchPatients = async () => {
  const url = "http://localhost:3001/3_0_1/patient";
  const response = await axios.get(url);
  return response.data.entry.reduce((acc, curr) => {
    acc[curr.resource.id] = curr.resource.name[0].text;
    return acc;
  }, {});
};

const fetchOwners = async () => {
  const url = "http://localhost:3001/.netlify/functions/user/getTeam";
  const response = await axios.get(url);
  return response.data.reduce((acc, curr) => {
    acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
    return acc;
  }, {});
};

const fetchTags = async () => {
  const url = "http://localhost:3001/tag/all";
  const response = await axios.get(url);
  return response.data;
};

const fetchPresets = async () => {
  const url = "http://localhost:4000/presets";
  const response = await axios.get(url);
  return response.data;
};

const addPresets = (data) => {
  const url = "http://localhost:4000/presets";
  return axios.post(url, data);
};

const updatePresets = (data) => {
  const url = `http://localhost:4000/presets/${data.id}`;
  return axios.put(url, data);
};

const fetchTasks = async (data, filters) => {
  const url = "http://localhost:3001/tasks";
  const config = queryBuilder(filters);
  const response = await axios.get(url, config);
  // console.log("config", config.params);
  return {
    data: response.data.map((el, i) => {
      return {
        id: el._id,
        title: el.task,
        description: el.comments,
        owner: data.owners[el.ownerId] || "N/A",
        patient: data.patients[el.patientId] || "N/A",
        duedate: el.dueDate || "N/A",
        tags: el.tags && el.tags.length ? el.tags : null,
        priority: el.priority,
        state: "N/A",
        attachment: el.attachments ? !!el.attachments.length : false,
        status: el.status,
      };
    }),
    count: response.headers["x-total-count"],
  };
};

export const usePatientsData = () => {
  return useQuery("patients", fetchPatients, {
    refetchOnWindowFocus: false,
  });
};

export const useOwnersData = () => {
  return useQuery("owners", fetchOwners, {
    refetchOnWindowFocus: false,
  });
};

export const useTagsData = () => {
  return useQuery("tags", fetchTags, {
    refetchOnWindowFocus: false,
  });
};

export const useTasksData = (filters) => {
  const { data: patients } = usePatientsData();
  const { data: owners } = useOwnersData();
  const data = { patients, owners };
  const key = ["tasks", filters];

  return useQuery(key, () => fetchTasks(data, filters), {
    refetchOnWindowFocus: false,
    enabled: !!patients && !!owners,
  });
};

export const usePresetsData = () => {
  return useQuery("presets", fetchPresets, {
    refetchOnWindowFocus: false,
  });
};

export const useAddPresetsData = () => {
  const queryClient = useQueryClient();
  return useMutation(addPresets, {
    onSuccess: (data) => {
      // we're handling mutation response here to automatically
      // show POST response; that way we save a network call
      queryClient.setQueryData("presets", (oldQueryData) => {
        return [...oldQueryData, data.data];
      });
    },
  });
};

export const useUpdatePresetsData = () => {
  const queryClient = useQueryClient();
  return useMutation(updatePresets, {
    onSuccess: (data) => {
      // we update `selections` only
      queryClient.setQueryData("presets", (oldQueryData) => {
        return oldQueryData.map((el) => {
          if (el.id === data.data.id) {
            el.selections = data.data.selections;
          }
          return el;
        });
      });
    },
  });
};
