import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemon } from "../../redux/actions/pokemonAction";
import PokemonCard from "../../components/pokemon-card";
import Pagination from "@mui/material/Pagination";
import LoadingCover from "../../components/loading-cover";
import "./home-page.scss";

const HomePage = () => {
  const dispatch = useDispatch();
  const pokemonData = useSelector((state) => state.pokemonData);
  let { listPokemon } = pokemonData;
  const [currentPage, setCurrentPage] = useState(pokemonData.statePage || 1);

  useEffect(() => {
    dispatch(getAllPokemon(currentPage));
  }, [currentPage, dispatch]);

  const pageHandler = async (event, value) => {
    setCurrentPage(value);
    await dispatch(getAllPokemon(value));
  };

  return !listPokemon ? (
    <LoadingCover />
  ) : (
    <div className="home-container">
      <div className="home-pokemon-wrapper">
        {listPokemon.allPokemon.map((item, index) => (
          <PokemonCard key={index} pokemonURL={item.url} />
        ))}
      </div>
      <Pagination
        className="home-pagination"
        count={listPokemon.totalPage}
        page={currentPage}
        size="large"
        onChange={pageHandler}
      />
    </div>
  );
};

export default HomePage;
