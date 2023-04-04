export const incrementCounter = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrementCounter = () => {
  return {
    type: "DECREMENT",
  };
};
export const resetCounter = () => {
  return {
    type: "RESET",
  };
};
// ------------------TODO List With Redux-----------------------//
export const addItem = () => {
  return {
    type: "ADD_ITEM",
  };
};
export const deleteItem = () => {
  return {
    type: "DELETE_ITEM",
  };
};

export const editItem = () => {
  return {
    type: "EDIT_ITEM",
  };
};
export const removeAll = () => {
  return {
    type: "REMOVEALL_ITEM",
  };
};