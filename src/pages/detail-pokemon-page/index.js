import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addMyPokemon, catchMyPokemon } from "../../redux/actions/myPokemonAction";
import { popNotification, resetNotification } from "../../redux/actions/notificationPop";
import { getDetailPokemon } from "../../redux/actions/pokemonAction";
import LoadingCover from "../../components/loading-cover";
import PopupCatch from "../../components/popup-catch";
import "./detail-page.scss";

const DetailPokemonPage = () => {
  const dispatch = useDispatch();
  const { pokemonId } = useParams();
  const pokemonData = useSelector((state) => state.pokemonData);
  let { detailPokemon } = pokemonData;
  const [statePokemon, setStatePokemon] = useState(false);
  const [alert, setAlert] = useState(false);

  const closeHandler = () => {
    setAlert(false);
    dispatch(popNotification("error", "Catch Fail !"));
    setTimeout(() => {
      dispatch(resetNotification());
    }, 1500);
  };

  const addPokemonHandler = async (name) => {
    await dispatch(addMyPokemon(pokemonId, name));
    setAlert(false);
    dispatch(popNotification("success", "Pokemon Added !"));
    setTimeout(() => {
      dispatch(resetNotification());
    }, 1500);
  };

  const catchHandler = async () => {
    await dispatch(catchMyPokemon(pokemonId));
    setAlert(true);
  };

  useEffect(() => {
    const getData = async () => {
      await dispatch(getDetailPokemon(pokemonId));
      setStatePokemon(true);
    };
    getData();
  }, [dispatch, pokemonId]);

  return !statePokemon || !detailPokemon ? (
    <LoadingCover />
  ) : (
    <div>
      <PopupCatch
        showAlert={alert}
        closeHandler={closeHandler}
        addPokemonHandler={addPokemonHandler}
      />
      <div className="detail-container">
        <div className="detail-wrapper">
          <div className="pokemon-col1">
            <div className="pokemon-image">
              <img
                className="pokemon-img"
                alt="poke-img"
                src={detailPokemon.images.other["official-artwork"].front_default}
              />
            </div>
            <div className="pokemon-name">{detailPokemon.name}</div>
            <div className="pokemon-type">
              {detailPokemon.types.map((item, index) => (
                <div className="pokemon-type-div" key={index}>
                  {item.type.name}
                </div>
              ))}
            </div>
          </div>
          <div className="pokemon-col2">
            <p className="pokemon-col2-label">Stats</p>
            <div className="pokemon-stats">
              {detailPokemon.stats.map((item, index) => (
                <div className="pokemon-stats-div" key={index}>
                  {item.stat.name}
                  <br />
                  {item.base_stat}
                </div>
              ))}
            </div>
            <p className="pokemon-col2-label">Ability</p>
            <div className="pokemon-abilities">
              {detailPokemon.abilities.map((item, index) => (
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
              {detailPokemon.moves.map((item, index) => (
                <ListItem key={index} component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText sx={{ color: "#fff" }} primary={item.move.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
        <div className="pokemon-catch" onClick={() => catchHandler()}>
          <p className="pokemon-catch-text">Catch Pokemon !</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPokemonPage;
