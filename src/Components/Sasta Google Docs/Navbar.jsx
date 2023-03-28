import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom" style={{background:"grey"}}>
      <div className="logo-docs">
        <h3 className="text-primary p-1 text-light">Google Docs</h3>
      </div>
      <div>
      <button className="btn btn-outline-light fw-bold btn-sm m-2">SignUp</button>
      <button className="btn btn-outline-light fw-bold btn-sm m-2">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
