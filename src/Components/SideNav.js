import React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { FaTh, FaMusic, FaThList, FaFilter, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideNav = ({ children }) => {
  const menuItem = [
    {
      path: "/browse",
      name: "Browse",
      icon: <FaTh />,
    },
    {
      path: "/listenNow",
      name: "Listen Now",
      icon: <FaThList />,
    },
    {
      path: "/radio",
      name: "Radio",
      icon: <FaMusic />,
    },
  ];
  return (
    <div className="container">
      <div className="sideNav">
        <div className="top-section">
          <h1 className="logo">Logo</h1>
        </div>
        <div className="searchFilter">
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <FaSearch sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField id="outlined-basic" label="Search" variant="outlined" />
            </Box>
  
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};
export { SideNav };
