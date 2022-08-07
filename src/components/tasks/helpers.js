/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = (filters) => {
  const params = { query: {} };
  const queries = ["priority", "ownerId", "status", "tags", "dueDate"];

  // from redux store; remove after
  params.userId = "616620c0df1f010009ea4a94";
  params.allPatients = false;

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
    } else if (key === "preset") {
      const isComplete = filters[key] === "complete";

      if (!filters.status.length) {
        params.query.status = isComplete ? "complete" : { $ne: "complete" };
      }
    } else {
      if (filters[key] || key === "page") {
        params[key === "sort" ? "sort[]" : key] = filters[key];
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
