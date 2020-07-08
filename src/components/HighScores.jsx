import React, { useEffect, useState } from "react";
import { useFirebase } from "./Firebase/FirebaseContex";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";

export default function HighScores() {
  const firebase = useFirebase();

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.scores().once("value", (snapshot) => {
      const data = snapshot.val();
      const sortedScores = formatScoreData(data);
      setScores(sortedScores);
      setLoading(false);
    });
  }, [firebase]);

  const formatScoreData = (firebaseScores) => {
    const scores = [];

    for (let key in firebaseScores) {
      const val = firebaseScores[key];
      val["key"] = key;
      scores.push(val);
    }

    return scores
      .sort((score1, score2) => score2.score - score1.score)
      .slice(0, 10);
  };
  return (
    <>
      {loading && <div id="loader"></div>}
      {!loading && (
        <>
          <motion.h1 animate={{ fontSize: 80, color: "#ff2994", rotateZ:360 }}> <span>H</span>igh <span>S</span>cores</motion.h1>
          
          <div id="highScoresList">
            {scores.map((record) => (
              <li key={record.key} className="high-score">
                {record.name} - {record.score}
              </li>
              
            ))}
          
          </div>
          <Link to='/' className="btn">
            Home
          </Link>
        </>
      )}
    </>
  );
}
