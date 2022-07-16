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
    dispatch({ type: "FETCH_DATA", payload: tasks });
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

// patient name example
// temp1.find(function(el) {
//   return el.resource.id === "8aacfafc-bbc2-4b16-95cc-90040397fc85"
// }).resource.name[0].text;

// owner name example
// temp2.reduce(function(acc, curr) {
//   if (curr._id === "5e35ef3e7c213e47b9d2c6c7") {
//     acc += `${curr.firstName} ${curr.lastName}`
//   }
//   return acc;
// }, "");

// note:
// might be better to create hashmap for names & ids
// temp1.reduce(function(acc, curr) {
//   acc[curr.resource.id] = curr.resource.name[0].text;
//   return acc;
// }, {});

// temp2.reduce(function(acc, curr) {
//   acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
//   return acc;
// }, {});

export const getTemp = async (dispatch) => {
  try {
    const patients = await axios
      .get("http://localhost:3001/patient")
      .then((response) => {
        return response.data.entry.reduce(function (acc, curr) {
          acc[curr.resource.id] = curr.resource.name[0].text;
          return acc;
        }, {});
      });
    const owners = await axios
      .get("http://localhost:3001/getTeam")
      .then((response) => {
        return response.data.reduce(function (acc, curr) {
          acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
          return acc;
        }, {});
      });

    console.log("patient", patients);
    console.log("owners", owners);

    dispatch({ type: "GET_USERS", payload: { patients: "hi", owners: "bye" } });

    const tasks = await axios.get("http://localhost:3001/tasks");
    const group = await axios.get("http://localhost:3001/group");
    const tags = await axios.get("http://localhost:3001/all");

    // console.log("team", team.data);
    // console.log("patient", patient.data);
    // console.log("group", group.data);
    // console.log("tags", tags.data);
    // console.log("tasks", tasks.data);

    // dispatch({ type: "FETCH_DATA", payload: tasks });
  } catch (error) {
    console.error(error);
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};
