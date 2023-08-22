import React from "react";
import stacks from "../data/stacks";
import StackBar from "./StackBar";

const Stack = () => {
  return (
    <div className="flex flex-col gap-8 px-4 py-6">
      <h1 className="text-center font-bold text-5xl mb-6">
        Stack and Technologies
      </h1>

      <div className="stacks flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col items-center gap-4 mb-2 md:w-1/3">
          {stacks.stack1.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-2 md:w-1/3">
          {stacks.stack2.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-2 md:w-1/3">
          {stacks.stack3.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
