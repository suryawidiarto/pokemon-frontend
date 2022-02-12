import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer } from "./side-bar-element";
import CloseIcon from "@mui/icons-material/Close";
import "./side-bar.scss";

const SideBar = ({ isOpen, toggleSideBar }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <CloseIcon className="sidebar-icon" onClick={toggleSideBar} />
      <div className="sidebar-menu">
        <div className="sidebar-item" onClick={toggleSideBar}>
          <Link to="/" className="sidebar-link">
            Home
          </Link>
        </div>
        <div className="sidebar-item" onClick={toggleSideBar}>
          <Link to="/my-pokemon" className="sidebar-link">
            My Pokemon
          </Link>
        </div>
      </div>
    </SidebarContainer>
  );
};

export default SideBar;
