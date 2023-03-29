import axios from "axios";
import React, { useEffect, useState } from "react";

function Component27() {
  const [search, setSearch] = useState("");
  const [state, setState] = useState();
  useEffect(() => {
    const flagData = async () => {
      const response = await axios.get(
        "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/index.json"
      );
      const data = response.data;
      setState(data);
    };
    flagData();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value.trim());
  };
  const filteredArray =
    state &&
    state.filter((value) => {
      const cName = value.name.toLowerCase()
      return cName.startsWith(search, 0) || cName.endsWith(search);
    });
  return (
    <React.Fragment>
      <h2 className="text-center display-6 bg-light p-2 ">
        Flags with country Name : Component27
      </h2>
      <div className="input-group mb-3 container">
        <input
          type="search"
          className="form-control border-primary ps-4 text-primary remove-shadow"
          placeholder="Search Country By Name..."
          onChange={handleChange}
          value={search}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <div className="flags-div">
        {!filteredArray ? (
          <h2 className="display-6">Working On it..</h2>
        ) : (
          filteredArray.map((value, index) => {
            return (
              <div key={index} className="border m-2 flag-image">
                <img src={value.image} alt="flagImage" />
                <h5 className="text-center">{value.name}</h5>
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
}
export default Component27;
