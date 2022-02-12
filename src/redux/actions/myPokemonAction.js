import Axios from "axios";

export const catchMyPokemon = (id_pokemon) => {
  return async (dispatch) => {
    try {
      await Axios.post(
        `${process.env.REACT_APP_SERVER_URL}/poke-api/catch-pokemon/${id_pokemon}`
      ).then((res) => {
        dispatch({ type: "CATCH_MY_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const addMyPokemon = (id_pokemon, name_pokemon) => {
  return async (dispatch) => {
    try {
      await Axios.post(`${process.env.REACT_APP_SERVER_URL}/poke-api/add-my-list-pokemon`, {
        id_pokemon: id_pokemon,
        name: name_pokemon,
      }).then((res) => {
        dispatch({ type: "ADD_MY_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const getAllMyPokemon = (currentPage) => {
  return async (dispatch) => {
    try {
      await Axios.get(
        `${process.env.REACT_APP_SERVER_URL}/poke-api/my-list-pokemon?page=${currentPage}`
      ).then((res) => {
        dispatch({ type: "GET_ALL_MY_POKEMON", payload: res.data, statePage: currentPage });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const getDetailMyPokemon = (idPokemon) => {
  return async (dispatch) => {
    try {
      await Axios.get(
        `${process.env.REACT_APP_SERVER_URL}/poke-api/detail-my-pokemon/${idPokemon}`
      ).then((res) => {
        dispatch({ type: "GET_DETAIL_MY_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const renameMyPokemon = (idPokemon) => {
  return async (dispatch) => {
    try {
      await Axios.post(`${process.env.REACT_APP_SERVER_URL}/poke-api/rename-pokemon`, {
        id: idPokemon,
      }).then((res) => {
        dispatch({ type: "RENAME_MY_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};

export const releaseMyPokemon = (idPokemon) => {
  return async (dispatch) => {
    try {
      await Axios.post(`${process.env.REACT_APP_SERVER_URL}/poke-api/release-pokemon`, {
        _id: idPokemon,
      }).then((res) => {
        dispatch({ type: "RELEASE_MY_POKEMON", payload: res.data });
      });
    } catch (err) {
      dispatch({ type: "MY_POKEMON_ERROR", payload: err });
      console.log(err);
    }
  };
};
