import React from 'react';
import camaraicon from "../cat-2.jpg"
function Component6(){
return (
    <React.Fragment>
        <h1>using anchor tag in JSX : component 6</h1>
      <p>
        Click This below(&darr;) image to open <strong> Google</strong>
      </p>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <img src={camaraicon} alt="goToGoogle" />
      </a>
      <hr />
    </React.Fragment>
)
}
export {Component6};