import React, { useEffect, useState } from "react";

const UserefHook = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (event) => {
      setState({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("pointermove", handleMove);
    return (event) => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <>
      <h2> Introduction : useRef Hook</h2>
      <div
        style={{
          position: "absolute",
          backgroundColor: "pink",
          borderRadius: "50%",
          opacity: 0.6,
          transform: `translate(${state.x}px, ${state.y}px)`,
          pointerEvents: "none",
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }}
      ></div>
    </>
  );
};

export default UserefHook;
