import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyPokemon } from "../../redux/actions/myPokemonAction";
import Pagination from "@mui/material/Pagination";
import LoadingCover from "../../components/loading-cover";
import MyPokemonCard from "../../components/my-pokemon-card";
import "./my-pokemon-page.scss";

const MyPokemonPage = () => {
  const dispatch = useDispatch();
  const myPokemonData = useSelector((state) => state.myPokemonData);
  let { myListPokemon } = myPokemonData;
  const [currentPage, setCurrentPage] = useState(myPokemonData.statePage || 1);
  const [statePokemon, setStatePokemon] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await dispatch(getAllMyPokemon(currentPage));
      setStatePokemon(true);
    };
    getData();
  }, [currentPage, dispatch]);

  const pageHandler = async (event, value) => {
    setStatePokemon(false);
    setCurrentPage(value);
    await dispatch(getAllMyPokemon(value));
    setStatePokemon(true);
  };

  return !myListPokemon ? (
    <LoadingCover />
  ) : (
    <div className="my-pokemon-container">
      {myListPokemon.listPokemon.length === 0 ? (
        <p className="my-pokemon-empty">My Pokemon Empty</p>
      ) : (
        <div className="my-pokemon-container2">
          <div className="my-pokemon-pokemon-wrapper">
            {myListPokemon.listPokemon.map((item, index) => (
              <MyPokemonCard
                key={index}
                statePokemon={statePokemon}
                pokemonId={item._id}
                pokemonImage={item.pokemon.images.other["official-artwork"].front_default}
                pokemonName={item.pokemon.name}
              />
            ))}
          </div>
          <Pagination
            className="my-pokemon-pagination"
            count={myListPokemon.totalPage}
            page={currentPage}
            size="large"
            onChange={pageHandler}
          />
        </div>
      )}
    </div>
  );
};

export default MyPokemonPage;
