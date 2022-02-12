import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getDetailMyPokemon,
  releaseMyPokemon,
  renameMyPokemon,
} from "../../redux/actions/myPokemonAction";
import { popNotification, resetNotification } from "../../redux/actions/notificationPop";
import PopupRelease from "../../components/popup-release";
import LoadingCover from "../../components/loading-cover";
import "./detail-my-pokemon-page.scss";

const DetailMyPokemonPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pokemonId } = useParams();
  const myPokemonData = useSelector((state) => state.myPokemonData);
  const { myDetailPokemon, releaseStatus } = myPokemonData;
  const [statePokemon, setStatePokemon] = useState(false);
  const [alert, setAlert] = useState(false);

  const renameHandler = async () => {
    await dispatch(renameMyPokemon(pokemonId));
  };

  const releaseHandler = async () => {
    await dispatch(releaseMyPokemon(pokemonId));
    setAlert(true);
  };

  const closeHandler = () => {
    if (releaseStatus.isPrime === "true") {
      setAlert(false);
      navigate("/my-pokemon");
    } else {
      setAlert(false);
    }
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDetailMyPokemon(pokemonId));
      setStatePokemon(true);
    };
    getData();

    if (myPokemonData.warn === "failed") {
      dispatch(popNotification("error", "Error Occurred"));
      setTimeout(() => {
        dispatch(resetNotification());
      }, 1750);
    }

    if (myPokemonData.warn === "rename-success") {
      dispatch(popNotification("success", "Rename Pokemon Successful"));
      setTimeout(() => {
        dispatch(resetNotification());
      }, 1500);
    }
  }, [dispatch, myPokemonData.warn, pokemonId]);

  return !statePokemon || !myDetailPokemon ? (
    <LoadingCover />
  ) : (
    <div>
      <PopupRelease showAlert={alert} closeHandler={closeHandler} />
      <div className="detail-my-pokemon-container">
        <div className="detail-my-pokemon-wrapper">
          <div className="pokemon-col1">
            <div className="pokemon-image">
              <img
                className="pokemon-img"
                alt="poke-img"
                src={myDetailPokemon.pokemon.images.other["official-artwork"].front_default}
              />
            </div>
            <div className="pokemon-name">{myDetailPokemon.pokemon.name}</div>
            <div className="pokemon-type">
              {myDetailPokemon.pokemon.types.map((item, index) => (
                <div className="pokemon-type-div" key={index}>
                  {item.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="pokemon-col2">
            <p className="pokemon-col2-label">Stats</p>
            <div className="pokemon-stats">
              {myDetailPokemon.pokemon.stats.map((item, index) => (
                <div className="pokemon-stats-div" key={index}>
                  {item.stat.name}
                  <br />
                  {item.base_stat}
                </div>
              ))}
            </div>
            <p className="pokemon-col2-label">Ability</p>
            <div className="pokemon-abilities">
              {myDetailPokemon.pokemon.abilities.map((item, index) => (
                <div className="pokemon-ability-div" key={index}>
                  {item.ability.name}
                </div>
              ))}
            </div>
          </div>
          <div className="pokemon-col3">
            <p className="pokemon-col3-label">Moves</p>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "#47a9da",
                position: "relative",
                overflow: "auto",
                maxHeight: 275,
                borderRadius: "5px",
                boxShadow: "0px 1px 4px #00000040",
              }}
            >
              {myDetailPokemon.pokemon.moves.map((item, index) => (
                <ListItem key={index} component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText sx={{ color: "#fff" }} primary={item.move.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div className="my-detail-pokemon-action">
          <div className="my-detail-pokemon-button" onClick={() => renameHandler()}>
            <p className="my-detail-pokemon-button-text">Rename</p>
          </div>
          <div className="my-detail-pokemon-button" onClick={() => releaseHandler()}>
            <p className="my-detail-pokemon-button-text">Release</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMyPokemonPage;
