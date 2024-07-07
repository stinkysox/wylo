import React from "react";
import "./Navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="home-navbar">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        Wylo
      </motion.h1>
    </div>
  );
};

export default Navbar;
