export const myPokemonReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ALL_MY_POKEMON":
      return {
        ...state,
        warn: "success",
        statePage: action.statePage,
        myListPokemon: action.payload,
      };
    case "GET_DETAIL_MY_POKEMON":
      return {
        ...state,
        warn: "success",
        myDetailPokemon: action.payload,
      };
    case "CATCH_MY_POKEMON":
      const isSuccess = action.payload.catch;
      if (isSuccess === "success") {
        return {
          ...state,
          warn: "success",
          catchPokemon: action.payload,
        };
      } else {
        return {
          ...state,
          warn: "failed",
          catchPokemon: action.payload,
        };
      }
    case "ADD_MY_POKEMON":
      return {
        ...state,
        warn: "success",
        myAllPokemon: action.payload,
      };
    case "RENAME_MY_POKEMON":
      return {
        ...state,
        warn: "rename-success",
        myDetailPokemon: action.payload,
      };
    case "RELEASE_MY_POKEMON":
      return {
        ...state,
        releaseStatus: action.payload,
      };
    case "MY_POKEMON_ERROR":
      return {
        ...state,
        warn: "failed",
        error: action.payload,
      };
    default:
      return state;
  }
};
