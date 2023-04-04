import React from "react";
import flipkartLogo from "./images/flipkart logo.png";

function Navbar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="flipkart-navbar">
        <div className="flipkart-logo">
          <img src={flipkartLogo} alt="flipkart-logo" width={100} />
        </div>
        <div className="searchbar-flipkart">
          <form onSubmit={handleSubmit}>
            <div className="search-bar-flipkart">
              <input type="text" className="input-field-flipkart" placeholder="Seach for products"/>
              <button className="search-button-flipkart"> Search</button>
            </div>
          </form>
        </div>
        <div className="signup-login-flipkart">
          <button  type="button">
            SignUp
          </button>
          <button type="button">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
