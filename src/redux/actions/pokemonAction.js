import Axios from "axios";

export const getAllPokemon = (currentPage) => {
  return async (dispatch) => {
    try {
      await Axios.get(
        `${process.env.REACT_APP_SERVER_URL}/poke-api/list-pokemon?page=${currentPage}`
      ).then((res) => {
        dispatch({ type: "GET_ALL_POKEMON", payload: res.data, statePage: currentPage });
      });
    } catch (err) {
      dispatch({ type: "GET_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const getDetailPokemon = (idPokemon) => {
  return async (dispatch) => {
    try {
      await Axios.get(
        `${process.env.REACT_APP_SERVER_URL}/poke-api/detail-pokemon/${idPokemon}`
      ).then((res) => {
        dispatch({ type: "GET_DETAIL_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "GET_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};
