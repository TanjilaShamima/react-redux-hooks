const { D_INCREMENT, D_DECREMENT } = require("./dynamicActionTyps");

export const dynamicIncrementAction = (value) => {
  return {
    type: D_INCREMENT,
    payload: value,
  };
};

export const dynamicDecrementAction = (value) => {
  return {
    type: D_DECREMENT,
    payload: value,
  };
};
