import React from "react";

const Selector = () => {
  return (
    <div id="select">
      <h3 className="select">Select a category</h3>
      <select name="category" id="category">
        <option value="general">General knowledge</option>
        <option value="music">Music</option>
        <option value="films">Films</option>
        <option value="animals">Celebrities</option>
        <option value="geography">Geography</option>
        <option value="history">History</option>
      </select>
    </div>
  );
};

export default Selector;
