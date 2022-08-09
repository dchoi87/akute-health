/**
 * queryBuilder
 * @param {obj} filters
 * @returns config query
 */
export const queryBuilder = {
  params: { query: {} },
  get: function (filters) {
    // from redux store; remove after
    this.params.userId = "616620c0df1f010009ea4a94";
    this.params.allPatients = false;

    for (let key in filters) {
      if (this.isQuery(key)) {
        if (key === "preset" && !filters.status.length) {
          this.params.query.status = this.value(filters[key]);
          continue;
        }

        if (filters[key].value.length) {
          this.params.query[key] = this.value(filters[key]);
        }
      } else {
        if (key === "sort") {
          this.params["sort[]"] = filters[key];
          continue;
        }

        this.params[key] = filters[key];
      }
    }

    return { params: this.params };
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
