/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = (filters) => {
  const params = {
    query: {},
    userId: "616620c0df1f010009ea4a94", // need to get this from redux store
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
