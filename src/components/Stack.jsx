import React from "react";
import stacks from "../data/stacks";
import StackBar from "./StackBar";

const Stack = () => {
  return (
    <section className="stack-section flex flex-col gap-8 px-4 py-24">
      <h1 className="text-center font-bold text-white text-5xl mb-6">
        Stacks and Technologies
      </h1>

      <div
        id="stacks"
        className="flex flex-col gap-2 justify-center sm:flex-row sm:flex-wrap sm:items-start md:flex-row md:flex-nowrap md:items-center"
      >
        <div className="flex flex-col items-center gap-4 mb-2 sm:w-1/3 md:w-1/3">
          {stacks.stack1.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-2 sm:w-1/3 md:w-1/3">
          {stacks.stack2.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-2 sm:w-1/3 md:w-1/3">
          {stacks.stack3.map((stack, i) => (
            <div className="flex gap-3 items-center" key={i}>
              <img src={stack.image} alt="img" />
              <StackBar experienceLevel={stack.experience} />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 mb-2 sm:w-1/3 "></div>
      </div>
    </section>
  );
};

export default Stack;
