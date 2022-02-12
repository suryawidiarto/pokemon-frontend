import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./pokemon-card.scss";

const PokemonCard = (props) => {
  const navigate = useNavigate();
  const [detailPokemon, setDetailPokemon] = useState();
  const getIdPokemon = props.pokemonURL;
  const idPokemon = getIdPokemon.slice(34, getIdPokemon.length - 1);

  const getPokemonData = (id_pokemon) => {
    Axios.get(`${process.env.REACT_APP_SERVER_URL}/poke-api/detail-pokemon/${id_pokemon}`)
      .then((res) => {
        setDetailPokemon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemonClickHandler = (id_pokemon) => {
    navigate(`detail-pokemon/${id_pokemon}`);
  };

  useEffect(() => {
    setDetailPokemon();
    getPokemonData(idPokemon);
  }, [idPokemon]);

  return !detailPokemon ? (
    <div className="skeleton-card-container">
      <div className="skeleton-image"></div>
      <div className="skeleton-name"></div>
    </div>
  ) : (
    <div className="card-container" onClick={() => pokemonClickHandler(detailPokemon.id)}>
      <div className="card-image">
        <img
          alt="img"
          className="card-img"
          src={detailPokemon.images.other["official-artwork"].front_default}
        />
      </div>
      <div className="card-name">{detailPokemon.name}</div>
    </div>
  );
};

export default PokemonCard;
