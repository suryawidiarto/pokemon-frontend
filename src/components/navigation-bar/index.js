import React from "react";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navigation-bar.scss";

const NavigationBar = ({ toggleSideBar }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="menu-wrapper">
        <div className="menu-poke-poke" onClick={() => navigate("/")}>
          PokePoke!
        </div>
        <div className="menu-my-poke" onClick={() => navigate("/my-pokemon")}>
          My Pokemon
        </div>
        <div className="nav-sidebar" onClick={toggleSideBar}>
          <MenuIcon />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
