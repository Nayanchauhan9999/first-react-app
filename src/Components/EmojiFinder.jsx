import React, { useEffect, useState } from "react";
import BackToTop from "./BackToTop";
import * as emojiList from "../utils/emoji.json";

const EmojiFinder = () => {
  const [state, setState] = useState();
  const [search, setSearch] = useState();
  useEffect(() => {
    const emojiData = async () => {
      const response = await fetch(emojiList);
      const data = await response.json();
      setState(data);
    };
    emojiData();
  }, []);
  const handleChange = (e) => {
    let value = e.target.value;
    setSearch(value.toLowerCase().trim());
  };
  let filteredArray =
    state &&
    search &&
    state.filter((value) => {
      const description = value.description.toLowerCase();
      const tags = value.tags.toString().toLowerCase();
      const aliases = value.aliases.toString().toLowerCase();
      const categories = value.category.toString().toLowerCase();
      return (
        aliases.startsWith(search, 0) ||
        tags.startsWith(search, 0) ||
        description.startsWith(search, 0) ||
        categories.startsWith(search, 0) ||
        aliases.endsWith(search) ||
        tags.endsWith(search) ||
        description.endsWith(search) ||
        categories.endsWith(search)
      );
    });
  return (
    <>
      <div className="input-group mb-3 container-sm">
        <input
          type="search"
          className="form-control border-primary"
          placeholder="Search Emoji"
          style={{ boxShadow: "none", paddingLeft: "20px" }}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </div>
      <BackToTop />
      {!filteredArray ? (
        !state ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <p>Total Result Found : {state.length}</p>
        )
      ) : (
        <p> Total Result Found: {filteredArray.length} </p>
      )}
      <div className="container-sm">
        {!filteredArray ? (
          !state ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            state.map((value, index) => {
              return (
                <div
                  className="d-flex align-items-center border-bottom"
                  key={index}
                >
                  <p className="text-black-50 mb-0 ms-2 me-1">{index + 1}.</p>
                  <p
                    style={{
                      fontSize: "35px",
                      margin: "0px",
                      padding: "5px",
                    }}
                  >
                    {value.emoji}
                  </p>
                  <p
                    className="mb-0 description"
                    onClick={() => {
                      return navigator.clipboard.writeText(value.emoji);
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })
          )
        ) : (
          filteredArray.map((value, index) => {
            return (
              <div className="d-flex align-items-center" key={index}>
                <p className="text-black-50 mb-0 ms-2 me-1">{index + 1}.</p>
                <p
                  style={{
                    fontSize: "35px",
                    margin: "0px",
                    padding: "5px",
                  }}
                >
                  {value.emoji}
                </p>
                <p
                  className="mb-0 description"
                  onClick={() => {
                    return navigator.clipboard.writeText(value.emoji);
                  }}
                >
                  {" "}
                  {value.description}
                </p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default EmojiFinder;
