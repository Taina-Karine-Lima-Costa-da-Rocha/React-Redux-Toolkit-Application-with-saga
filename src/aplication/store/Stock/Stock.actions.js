export const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
};

export const increment = () => {
  return { type: actions.INCREMENT };
};

export const decrement = () => {
  return { type: actions.DECREMENT };
};
