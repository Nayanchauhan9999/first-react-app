import React, { useEffect, useState } from "react";

const WeatherAPI = () => {
  let [state, setState] = useState("Surendranagar");
  let [search, setSearch] = useState("Surendranagar");
  let [wdata, setWdata] = useState();
  useEffect(() => {
    weatherData();
  }, []);
  const weatherData = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=acd0bc570900c3e773f85be73145f869&units=metric`
    );
    const data = await response.json();
    setWdata(data);
  };
  const onchange = (event) => {
    let value = event.target.value;
    setState(value);
  };
  const searchCity = () => {
    search = state;
    setSearch(state);
    weatherData();
  };
  console.log(wdata)
  return (
    <React.Fragment>
      <div className="container text-center"  style={{fontFamily:"roboto"}}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor="search"></label>
          <input 
            type="search"
            className="form-control w-50 m-auto"
            id="search"
            style={{ outline: "none" , textTransform:"capitalize"}}
            onChange={onchange}
            value={state}
            required
          />
          <br />
          <input
            type="submit"
            value="Search"
            className="btn btn-primary"
            onClick={searchCity}
          />
        </form>
      </div>
      {!wdata ? (
        <p  style={{fontFamily:"roboto"}}>Data not available</p>
      ) : (
        <>
        {!wdata.name? <>
        <div style={{fontFamily:"roboto"}}>
          <h3 className="text-center m-5 text-danger"> Opps! City Not Found </h3>
          <h5 className="text-center">Try <span className="text-success"> Delhi , Ahmedabad, florida , Surendranagar... </span> </h5>
          </div>
        </> : 
          <table className="table table-striped table-hover"style={{fontFamily:"roboto"}}>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Weather Data</th>
                <th scope="col">Current Weather</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td> City Name </td>
                <td> {wdata.name}, ({wdata.sys.country})</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td> Current Temperature </td>
                <td> {wdata.main.temp} &#8451; </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td> Current Humidity </td>
                <td> {wdata.main.humidity} % </td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td> Today's Minimum Temperature </td>
                <td> {wdata.main.temp_min} &#8451; </td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td> Today's Maximum Temperature </td>
                <td> {wdata.main.temp_max} &#8451; </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td> Wind Speed </td>
                <td> {(wdata.wind.speed * (5/18)).toFixed(2)} km/h </td>
              </tr>
            </tbody>
          </table>
        }
        </>
      )}
    </React.Fragment>
  );
};

export default WeatherAPI;
