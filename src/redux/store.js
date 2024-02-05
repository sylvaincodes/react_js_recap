import { createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware, thunk(save))
);
