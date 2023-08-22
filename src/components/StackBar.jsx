import React from "react";

const StackBar = ({ experienceLevel }) => {
  return (
    <div
      className="bg-lightGrey rounded-full"
      style={{ width: "150px", height: "10px" }}
    >
      <div
        className="bg-green rounded-full"
        style={{ width: experienceLevel, height: "10px" }}
      ></div>
    </div>
  );
};

export default StackBar;
