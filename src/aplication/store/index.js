import { createStore, combineReducers } from "redux";
import stockReducer from "./Stock/Stock.reducer";

const rootReducer = combineReducers({
  stock: stockReducer
});

const store = createStore(rootReducer);

export { store };
