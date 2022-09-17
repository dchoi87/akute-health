let data = { type: "priority", order: "desc" };
let primary = { priority: "desc" };
let secondary;

export const useSort = (dispatch) => {
  const handleSort = (value) => {
    const key = Object.keys(primary)[0];
    const payload = [];
    value = value.value || value;

    if (key === value) {
      // change order
      primary[value] = primary[value] === "asc" ? "desc" : "asc";
    } else {
      // change type
      const _secondary = secondary;
      secondary = primary;
      primary = _secondary || { [value]: "desc" };
    }
    // update payload
    payload.push(primary);
    secondary && payload.push(secondary);
    // set data for component usage
    const updatedKey = Object.keys(primary)[0];
    data = { type: updatedKey, order: primary[updatedKey] };
    // dispatch payload
    dispatch({ type: "CHANGE_SORT", payload: payload });
  };

  return [data, handleSort];
};
