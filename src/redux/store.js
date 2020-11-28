import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root.reducer";

let store = createStore(rootReducer, composeWithDevTools());

export { store };
