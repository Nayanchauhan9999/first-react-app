import React, { useEffect, useRef } from "react";

const InputDisplay = () => {
  const inputRef = useRef(null)
  useEffect(()=>{
    inputRef.current.focus()
  },[inputRef])
  return (
    <div className="inputdisplay-div">
      <div
        className="input-content w-75 m-auto mt-5"
        contentEditable="true"
        ref={inputRef}
       >
       <h2>hello my name is nayan </h2>
       </div>
    </div>
  );
};

export default InputDisplay;
