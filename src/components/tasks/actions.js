import axios from "axios";

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
 * 8. patientId => patient
 * 9. ownerId => owner
 * 10. status => ???
 */

const fetchPatients = () => {
  return axios.get("http://localhost:3001/patient").then((response) => {
    return response.data.entry.reduce((acc, curr) => {
      acc[curr.resource.id] = curr.resource.name[0].text;
      return acc;
    }, {});
  });
};

const fetchOwners = () => {
  return axios.get("http://localhost:3001/getTeam").then((response) => {
    return response.data.reduce((acc, curr) => {
      acc[curr._id] = `${curr.firstName} ${curr.lastName}`;
      return acc;
    }, {});
  });
};

const fetchTasks = (patients, owners) => {
  return axios.get("http://localhost:3001/tasks").then((response) => {
    return response.data.map((el) => {
      return {
        id: el._id,
        title: el.task,
        description: el.comments,
        owner: owners[el.ownerId] || "N/A",
        patient: patients[el.patientId] || "N/A",
        duedate: el.dueDate,
        tags: el.tags && el.tags.length ? el.tags : null,
        priority: el.priority === "p1" ? "urgent" : el.priority,
        state: "N/A",
        attachment: el.attachments ? !!el.attachments.length : false,
      };
    });
  });
};

const fetchGroup = () => {
  return axios.get("http://localhost:3001/group");
};

const fetchTags = () => {
  return axios.get("http://localhost:3001/all");
};

export const getData = async (dispatch) => {
  try {
    const patients = await fetchPatients();
    const owners = await fetchOwners();

    dispatch({ type: "GET_PATIENTS", payload: patients });
    dispatch({ type: "GET_OWNERS", payload: owners });

    const tasks = await fetchTasks(patients, owners);

    dispatch({ type: "GET_TASKS", payload: tasks });
  } catch (error) {
    console.error(error);
    dispatch({ type: "SHOW_ERROR", payload: error });
  }
};
