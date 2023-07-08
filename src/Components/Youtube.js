/* eslint-disable no-unused-vars */

import axios from "axios";
import React, { useEffect, useState } from "react";

function Youtube() {
  const [vidDetails, setVidDetails] = useState({});
  const [input, setInput] = useState("");
  const [search, setSearch] = useState();
  useEffect(() => {
    youtubeAPI();
  }, []);
  const youtubeAPI = async () => {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos?id=zG1hgmJMqQA&key=AIzaSyByko691MYclDMo13OYErQLpAE_wSNXOkw&part=snippet,contentDetails,statistics,status"
    );
    const data = response.data;
    setVidDetails(data);
    console.log(data);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSearch = () => {
    setSearch(input);
    console.log(input);
  };
  return (
    <>
      <div className="bg-light">
        <div className="container mx-auto shadow p-3 rounded">
          <h1 className="text-center bg-dark text-light p-2 rounded">
            Youtube
          </h1>

          <ul className="my-5">
            <li>
              <h2>Youtube video Analytics</h2>
            </li>
          </ul>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="paste video url"
              onChange={handleChange}
              value={input}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          {/* <div className="container">
            <iframe
              width="100%"
              height="250"
              src="https://www.youtube.com/embed/BpYzXsV8w04"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div> */}
        </div>
      </div>
    </>
  );
}
export default Youtube;
