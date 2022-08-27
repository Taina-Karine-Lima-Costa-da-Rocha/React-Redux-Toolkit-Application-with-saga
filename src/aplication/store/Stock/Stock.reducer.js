import { actions } from "./Stock.actions";

const mathReducer = (state = 0, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return state + 1;
      break;
    case actions.DECREMENT:
      return state - 1;
      break;

    default:
      return state;
      break;
  }
};
export default mathReducer;
