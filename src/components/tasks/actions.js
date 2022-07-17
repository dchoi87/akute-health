import axios from "axios";

import { mockData } from "./data";

const getMockData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 500);
  });
};

export const getTasks = async (dispatch) => {
  try {
    const tasks = await getMockData();
    dispatch({ type: "GET_TASKS", payload: tasks });
  } catch (error) {
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};

/**
 * DATA => MASSAGED
 *
 * 1. task => title
 * 2. dueDate => duedate
 * 3. comments => description
 * 4. priority or sortPriority => priority
 * 5. tags => tags
 * 6. _id => id
 * 7. attachments => attachment
 *
 * 8. patientId => patient
 * 9. ownerId => owner
 *
 * 10. status => ???
 */

export const getData = async (dispatch) => {
  try {
    const patients = await axios
      .get("http://localhost:3001/patient")
      .then((response) => {
        return response.data.entry.reduce((acc, curr) => {
          acc[curr.resource.id] = curr.resource.name[0].text;
          return acc;
        }, {});
      });
    const owners = await axios
      .get("http://localhost:3001/getTeam")
      .then((response) => {
        return response.data.reduce((acc, curr) => {
          acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
          return acc;
        }, {});
      });

    dispatch({ type: "GET_PATIENTS", payload: patients });
    dispatch({ type: "GET_OWNERS", payload: owners });

    const tasks = await axios
      .get("http://localhost:3001/tasks")
      .then((response) => {
        return response.data.map((el) => {
          return {
            id: el._id,
            title: el.task,
            description: el.comments,
            owner: owners[el.ownerId],
            patient: patients[el.patientId],
            duedate: el.dueDate,
            tags: el.tags,
            priority: el.priority,
            state: "N/A",
            attachment: el.attachments ? !!el.attachments.length : false,
          };
        });
      });

    dispatch({ type: "GET_TASKS", payload: tasks });

    // const group = await axios.get("http://localhost:3001/group");
    // const tags = await axios.get("http://localhost:3001/all");
  } catch (error) {
    console.error(error);
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};
