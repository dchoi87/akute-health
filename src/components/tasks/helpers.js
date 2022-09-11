/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = (filters) => {
  const params = { query: {} };
  const queries = [
    "priority",
    "ownerId",
    "status",
    "tags",
    "dueDate",
    "tagGroups",
  ];

  // from redux store; remove after
  params.userId = "616620c0df1f010009ea4a94";
  params.allPatients = false;

  for (let key in filters) {
    if (queries.includes(key)) {
      if (filters[key].length) {
        params.query[key] = filters[key];
      }
      continue;
    }
    params[key] = filters[key];
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
