import axios from "axios";
import { useQuery } from "react-query";

import { queryBuilder } from "../helpers";

const fetchPatients = async () => {
  const response = await axios.get("http://localhost:3001/patient");
  return response.data.entry.reduce((acc, curr) => {
    acc[curr.resource.id] = curr.resource.name[0].text;
    return acc;
  }, {});
};

const fetchOwners = async () => {
  const response = await axios.get("http://localhost:3001/getTeam");
  return response.data.reduce((acc, curr) => {
    acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
    return acc;
  }, {});
};

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
  const { data: patients } = useQuery("patients", fetchPatients, {
    refetchOnWindowFocus: false,
  });
  const { data: owners } = useQuery("owners", fetchOwners, {
    refetchOnWindowFocus: false,
  });
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
