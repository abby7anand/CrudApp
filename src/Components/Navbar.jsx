import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <AppBar sx={{ background: "black", mb: "10px", position: "static" }}>
        <Toolbar>
          <NavLink
            to="/"
            style={{
              fontSize: "20px",
              marginRight: "1rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            CrudAppp-MUI
          </NavLink>
          <NavLink
            to="/all"
            style={{
              fontSize: "20px",
              marginRight: "1rem",

              color: "white",
              textDecoration: "none",
            }}
          >
            All-Users
          </NavLink>
          <NavLink
            to="/add"
            style={{
              fontSize: "20px",
              marginRight: "1rem",

              color: "white",
              textDecoration: "none",
            }}
          >
            Users
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
