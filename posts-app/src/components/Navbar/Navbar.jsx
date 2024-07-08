import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";
import Cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = Cookie.get("token");
  const navigate = useNavigate();

  const onLogOut = () => {
    Cookie.remove("token");
    navigate("/login");
  };
  return (
    <div className="home-navbar">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        Wylo
      </motion.h1>
      {token !== undefined && (
        <motion.button
          className="log-out"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          onClick={() => onLogOut()}
        >
          Log Out
        </motion.button>
      )}
    </div>
  );
};

export default Navbar;
