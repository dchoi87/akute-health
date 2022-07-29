/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = (filters) => {
  const params = {
    query: {},
    userId: "616620c0df1f010009ea4a94",
    page: 0,
    limit: 100,
    allPatients: false,
  };

  for (let key in filters) {
    if (filters[key].length) {
      params.query[key] =
        key === "ownerId" ? filters[key] : { $in: filters[key] };
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
