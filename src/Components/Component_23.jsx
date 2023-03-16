import React, { Fragment } from "react";

function FetchAPI() {
    let time = new Date().toLocaleTimeString();
  return (
    <Fragment>
      <h2>FetchAPI : Component-23</h2>
      <h5>Using fetch API method we can get data from the server. And then we can use this data in our website. API provide realtime as well as normal data. some where we need realtime data. Example: Stock Market, Covid Cases,equity price, currency price, Cricket Score and so on. <br /> appart of this we have normal API for need some fixed data. Example : biodata, country details, product spacification... </h5>
      <ul>
        <li>Inbuilt API's in Javascript</li>
        <li>API from the server</li>
      </ul>
      <ol>
        <li>Inbuilt API has been provided from javascript, window objects,and many others. <br />
        Example : {time} <br />
        here, new Date() is Inbuilt API from the javascript.
        </li>
        <li> we can also get data from the server using fetch api method some example below. </li>
      </ol>
    </Fragment>
  );
}

export default FetchAPI;
