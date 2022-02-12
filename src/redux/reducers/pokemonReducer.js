export const pokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMON":
      return {
        ...state,
        warn: "success",
        statePage: action.statePage,
        listPokemon: action.payload,
      };
    case "GET_DETAIL_POKEMON":
      return {
        ...state,
        warn: "success",
        detailPokemon: action.payload,
      };
    case "CLEAN_DETAIL_POKEMON": {
      return {
        ...state,
        detailPokemon: {},
      };
    }
    case "GET_POKEMON_ERROR":
      return {
        ...state,
        warn: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};
