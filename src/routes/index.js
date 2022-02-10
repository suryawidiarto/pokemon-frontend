import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPokemonPage from "../pages/detail-page";
import HomePage from "../pages/home-page";
import MyPokemonPage from "../pages/my-pokemon-page";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail-pokemon" element={<DetailPokemonPage />} />
        <Route path="/my-pokemon" element={<MyPokemonPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
