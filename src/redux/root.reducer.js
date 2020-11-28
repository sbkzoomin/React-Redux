import { combineReducers } from "redux";
import { messageCardReducer } from "./messageCard/messageCardReducer";
import { productItemReducer } from "./productItemReducer";

let rootReducer = combineReducers({
  messageCardReducer,
  productItemReducer
});

export { rootReducer };
