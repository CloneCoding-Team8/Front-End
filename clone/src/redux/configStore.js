import { createStore, combineReducers, applyMiddleware } from "redux";

import { createBrowserHistory } from "history";

import thunk from "redux-thunk";
import post from "./modules/post";

export const history = createBrowserHistory();

const middlewares = [thunk.withExtraArgument({ history: history })];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({
  post: post,
});

const store = createStore(rootReducer, enhancer);

export default store;
