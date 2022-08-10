import axios from "axios";
import { useQuery } from "react-query";

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

export const usePatientsData = () => {
  return useQuery("patients", fetchPatients, {
    refetchOnWindowFocus: false,
  });
};

// owners
const fetchOwners = async () => {
  const url = "http://localhost:3001/.netlify/functions/user/getTeam";
  const response = await axios.get(url);
  return response.data.reduce((acc, curr) => {
    acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
    return acc;
  }, {});
};

export const useOwnersData = () => {
  return useQuery("owners", fetchOwners, {
    refetchOnWindowFocus: false,
  });
};

// tags
const fetchTags = async () => {
  const url = "http://localhost:3001/tag/all";
  const response = await axios.get(url);
  return response.data;
};

export const useTagsData = () => {
  return useQuery("tags", fetchTags, {
    refetchOnWindowFocus: false,
  });
};

// tasks
const fetchTasks = async (data, filters) => {
  const url = "http://localhost:3001/tasks";
  const config = queryBuilder.get(filters);
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

// saved filters
const fetchPresets = async () => {
  const url = "http://localhost:3001/filters";
  const response = await axios.get(url);
  return response.data;
};

export const usePresetsData = () => {
  return useQuery("presets", fetchPresets, {
    refetchOnWindowFocus: false,
  });
};
