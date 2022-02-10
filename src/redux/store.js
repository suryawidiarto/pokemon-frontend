import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

const InitialState = {};

const Reducer = combineReducers({});

const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducer, InitialState, ComposeEnhancer(applyMiddleware(thunk)));

export default Store;
