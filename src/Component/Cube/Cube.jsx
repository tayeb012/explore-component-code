import React from "react";
import "./Cube.css";

const Cube = () => {
  return (
    <div className="h-screen w-screen bg-red-300">
      <div class="box-container">
        <div class="box">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
