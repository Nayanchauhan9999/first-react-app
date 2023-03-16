import React, { useEffect, useState } from "react";

function Component27() {
  const [state, setState] = useState();

  // countryData()
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setState(data);
      });
  }, []);
  return (
    <React.Fragment>
      <hr />
      <h2>Flags with country Name : Component27</h2>
      <div className="d-flex flex-wrap justify-content-between">
      {state &&
        state.length > 0 &&
        state.map((value, index) => {
          return (
              <div key={index} className="border m-2" style={{width:"200px"}}>
              <img src={value.image} alt="flagImage" width={200}/>
                <h5 className="text-center">{value.name}</h5>
              </div>
          );
        })}
        </div>
    </React.Fragment>
  );
}
export default Component27;
