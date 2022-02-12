import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { myPokemonReducer } from "./reducers/myPokemonReducer";
import { pokemonReducer } from "./reducers/pokemonReducer";
import { notificationPopReducer } from "./reducers/notificationPopReducer";

const InitialState = {};

const Reducer = combineReducers({
  pokemonData: pokemonReducer,
  myPokemonData: myPokemonReducer,
  notification: notificationPopReducer,
});

const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducer, InitialState, ComposeEnhancer(applyMiddleware(thunk)));

export default Store;
