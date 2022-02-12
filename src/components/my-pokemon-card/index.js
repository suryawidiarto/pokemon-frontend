import { useNavigate } from "react-router-dom";
import React from "react";
import "./my-pokemon-card.scss";

const MyPokemonCard = (props) => {
  const navigate = useNavigate();

  const pokemonClickHandler = (id_pokemon) => {
    navigate(`/my-pokemon-detail/${id_pokemon}`);
  };

  return !props.statePokemon ? (
    <div className="skeleton-my-card-container">
      <div className="skeleton-image"></div>
      <div className="skeleton-name"></div>
    </div>
  ) : (
    <div className="my-card-container" onClick={() => pokemonClickHandler(props.pokemonId)}>
      <div className="my-card-image">
        <img alt="img" className="my-card-img" src={props.pokemonImage} />
      </div>
      <div className="my-card-name">{props.pokemonName}</div>
    </div>
  );
};

export default MyPokemonCard;
