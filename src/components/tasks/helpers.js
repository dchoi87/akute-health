import moment from "moment";

/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = (filters) => {
  const params = {
    query: {},
    userId: "616620c0df1f010009ea4a94", // need to get this from redux store
    page: 0,
    limit: 100,
    allPatients: false, // is this always false?
  };
  const queries = ["priority", "ownerId", "status", "tags", "dueDate"];

  for (let key in filters) {
    if (queries.includes(key)) {
      if (filters[key].length) {
        switch (key) {
          case "ownerId": {
            params.query[key] = filters[key];
            break;
          }
          case "dueDate": {
            params.query[key] = { $lte: filters[key] };
            break;
          }
          default: {
            params.query[key] = { $in: filters[key] };
            break;
          }
        }
      }
    } else {
      if (filters[key]) {
        params[key] = filters[key];
      }
    }
  }

  return { params };
};

/**
 * addRemoveFromArray
 * @param {arr} array
 * @param {str} value
 * @returns filtered array
 */
export const addRemoveFromArray = (array, value) => {
  if (array.includes(value)) {
    return array.filter((el) => {
      return el !== value;
    });
  } else {
    return [...array, value];
  }
};

/**
 * sorter
 * @param {obj} a
 * @param {obj} b
 * @param {str} sort
 * @param {str} type
 * @returns sort logic
 */
export const sorter = (a, b, sort, type) => {
  const isDesc = sort === "desc";

  if (!a[type]) return isDesc ? 1 : -1;
  if (!b[type]) return isDesc ? -1 : 1;
  if (type === "priority") {
    return isDesc
      ? a.priority.localeCompare(b[type])
      : b.priority.localeCompare(a[type]);
  } else {
    return isDesc
      ? moment(b[type]).format("YYYYMMDD") - moment(a[type]).format("YYYYMMDD")
      : moment(a[type]).format("YYYYMMDD") - moment(b[type]).format("YYYYMMDD");
  }
};
