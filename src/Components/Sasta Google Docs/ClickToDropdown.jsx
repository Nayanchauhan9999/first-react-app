import React, { useEffect, useRef, useState } from "react";

const ClickToDropdown = ({caseList,toolName}) => {
  const [display, setDisplay] = useState(false);
  const toggleRef = useRef();
  useEffect(()=>{
    const handleClick = (e)=>{
      if(toggleRef.current && !toggleRef.current.contains(e.target)){
        setDisplay(false)
      }
    }
    window.addEventListener("click",handleClick)
  },[])
  const toggleDropdown = () => {
    if (display === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };
  const selectOption = () => {
    setDisplay(false);
  };
  return (
    <div>
      <button className="buttons" onClick={toggleDropdown} ref={toggleRef}>
        {toolName}
      </button>
      {display ? (
        <div
          className="case-list"
          onClick={selectOption}
        >
          {caseList.map((value,index)=>{
            return <div key={index}> {value} </div>
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ClickToDropdown;
