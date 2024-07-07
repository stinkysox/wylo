import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="left-div" />
        <div className="center-div">
          <motion.div
            className="option-selection"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
            whileHover={{ y: -10 }}
          >
            <button onClick={() => navigate("/posts")}>Explore</button>
          </motion.div>
          <motion.p
            className="about"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
            }}
          >
            Wylo Connect, Your space to share thoughts, spark conversations, and
            connect with the world. Whether it's a fleeting idea or a profound
            insight, scribble it down and let your voice be heard. Join a
            community of thinkers, creators, and dreamers. Engage, explore, and
            inspire with Wylo Connect.
          </motion.p>
        </div>

        <div className="right-div" />
      </div>
    </>
  );
};

export default Home;
