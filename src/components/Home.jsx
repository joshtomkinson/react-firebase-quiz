import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Selector from "./Selector";

export default function Home() {
  return (
    <>
      <motion.h1 animate={{ fontSize: 80, color: "#ff2994", rotateZ: 720 }}>
        <span>L</span>evel <span>U</span>p <span>Q</span>uiz
      </motion.h1>
      <h3 animate={{ fontSize: 40, color: "#fff" }}>
        Presented by{" "}
        <motion.span animate={{ fontSize: 70, color: "#ff2994" }}>
          R
        </motion.span>
        eact &{" "}
        <motion.span animate={{ fontSize: 50, color: "#ff2994" }}>
          F
        </motion.span>
        irebase
      </h3>
      <Link to="/game" className="btn">
        Start Game
      </Link>

      <Link to="/highScores" className="btn">
        High Scores
      </Link>
    </>
  );
}
