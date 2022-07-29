import axios from "axios";
import { useQuery } from "react-query";

import { queryBuilder } from "../helpers";

// patients
const fetchPatients = async () => {
  const response = await axios.get("http://localhost:3001/3_0_1/patient");
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
  const response = await axios.get(
    "http://localhost:3001/.netlify/functions/user/getTeam"
  );
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
  const response = await axios.get("http://localhost:3001/tag/all");
  return response.data;
};

export const useTagsData = () => {
  return useQuery("tags", fetchTags, {
    refetchOnWindowFocus: false,
  });
};

// tasks
const fetchTasks = async (data, filters) => {
  const config = queryBuilder(filters);
  console.log("config", config.params.query);
  const response = await axios.get("http://localhost:3001/tasks", config);
  return response.data.map((el, i) => {
    return {
      id: el._id,
      title: el.task,
      description: el.comments,
      owner: data.owners[el.ownerId] || "N/A",
      patient: data.patients[el.patientId] || "N/A",
      duedate: el.dueDate,
      tags: el.tags && el.tags.length ? el.tags : null,
      priority: el.priority === "p1" ? "urgent" : el.priority || "no priority",
      state: "N/A",
      attachment: el.attachments ? !!el.attachments.length : false,
      status: el.status,
    };
  });
};

export const useTasksData = (filters) => {
  const { data: patients } = usePatientsData();
  const { data: owners } = useOwnersData();

  const tasks = useQuery(
    ["tasks", filters],
    () => fetchTasks({ patients, owners }, filters),
    {
      refetchOnWindowFocus: false,
      enabled: !!patients && !!owners,
    }
  );

  return tasks;
};
