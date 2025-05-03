import React, { useReducer } from "react";

const inital_state = {
  count: 0,
};

const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    console.log(state);
    return { count: state.count + 1 };
  } else if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  } else if (action.type === "RESET") {
    console.log("this is runnign");
    return inital_state;
  }
};

const Element = () => {
  const [state, dispatcher] = useReducer(reducer, inital_state);
  return (
    <div className="border border-black flex flex-col">
      <div className="border border-black flex flex-row ">
        <div
          className="border border-black"
          onClick={() => dispatcher({ type: "INCREASE" })}>
          +
        </div>
        <div className="border border-black">{state.count}</div>
        <div
          className="border border-black"
          onClick={() => {
            dispatcher({ type: "DECREASE" });
          }}>
          -
        </div>
      </div>
      <div
        className="border border-black"
        onClick={() => {
          dispatcher({ type: "RESET" });
        }}>
        RESET
      </div>
    </div>
  );
};

export default Element;
