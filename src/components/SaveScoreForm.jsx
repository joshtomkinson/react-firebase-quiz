import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "./Firebase/FirebaseContex";
export default function SaveScoreForm({ score, scoreSaved }) {
  const [username, setUsername] = useState("");
  const firebase = useFirebase();

  const onUsernameChange = (e) => {
    const updatedUsername = e.target.value;
    setUsername(updatedUsername);
  };

  const saveHighScore = (e) => {
    e.preventDefault();
    const record = {
      name: username,
      score,
    };

    firebase.scores().push(record, () => {
      console.log("Score Saved!");
      scoreSaved();
    });
  };

  return (
    <div className="container">
      <h1>Score:{score} </h1>
      <form onSubmit={saveHighScore}>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Your name"
          value={username}
          onChange={onUsernameChange}
        />
        <button type="submit" className="btn" disabled={!username}>
          Save
        </button>
      </form>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
}
