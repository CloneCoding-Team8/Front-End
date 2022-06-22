import { legacy_createStore, combineReducers, applyMiddleware } from "redux";

// middlewares
import thunk from "redux-thunk";
import logger from "redux-logger";

// reducers
import user from "./modules/user";
import catalog from "./modules/catalog";
import review from "./modules/review";

const rootReducer = combineReducers({ user, catalog, review });

// logger 를 사용하는 경우, logger가 가장 마지막에 와야합니다.
const middlewares = [thunk, logger];

const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
