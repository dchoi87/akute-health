/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = {
  get: function (filters) {
    const params = { query: {} };

    // from redux store; remove after
    params.userId = "616620c0df1f010009ea4a94";
    params.allPatients = false;

    for (let key in filters) {
      if (this.isQuery(key)) {
        // preset
        if (key === "preset" && !filters.status.length) {
          params.query.status = this.value(filters[key]);
          continue;
        }
        // priority, ownerId, status, tags, dueDate
        if (filters[key].value.length) {
          params.query[key] = this.value(filters[key]);
        }
      } else {
        // sort
        if (key === "sort") {
          params["sort[]"] = filters[key];
          continue;
        }
        // page, limit
        params[key] = filters[key];
      }
    }

    return { params: params };
  },
  value: function (filter) {
    return filter.action ? { [filter.action]: filter.value } : filter.value;
  },
  isQuery: function (key) {
    const queries = [
      "priority",
      "ownerId",
      "status",
      "tags",
      "dueDate",
      "preset",
    ];
    return queries.includes(key);
  },
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
