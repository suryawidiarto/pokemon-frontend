import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppPage from "../pages/app-page";
import DetailMyPokemonPage from "../pages/detail-my-pokemon-page";
import DetailPokemonPage from "../pages/detail-pokemon-page";
import HomePage from "../pages/home-page";
import MyPokemonPage from "../pages/my-pokemon-page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="detail-pokemon/:pokemonId" element={<DetailPokemonPage />} />
          <Route path="my-pokemon" element={<MyPokemonPage />} />
          <Route path="my-pokemon-detail/:pokemonId" element={<DetailMyPokemonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
