import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
function ReactRouterDom() {
  const Navbar = () => {
    return (
      <>
        <ul className="main-div">
          <li className="nav-item">
            <NavLink to="home" >Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="about">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="name" >Name</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </>
    );
  };
  const Home = () => {
    return (
      <>
        <h1>Hi i am <span className="text-danger">Home</span> page</h1>
      </>
    );
  };
  const About = () => {
    return (
      <>
        <h1>Hi i am <span className="text-danger">About Us</span> page</h1>
      </>
    );
  };
  const Name = () => {
    return (
      <>
        <h1>Hi i am <span className="text-danger">Name</span> page</h1>
      </>
    );
  };
  // const Error = () => {
  //   return (
  //     <>
  //       <h1>Error 404 Not Found</h1>
  //     </>
  //   );
  // };
  const Contact = () => {
    return (
      <>
        <h1>Hi i am <span className="text-danger">Contact</span> Us page</h1>
      </>
    );
  };
  return (
    <React.Fragment>
      <hr />
      <h2>React Router Dom in React Js : Component 28</h2>
      <Navbar />
      <Routes>
      <Route  path="home"  element={<Home/>}/>
      <Route  path="about"  element={<About/>}  />
      <Route  path="contact" element={<Contact/>}  />
      <Route  path="name" element={<Name/>}  />
      {/* <Route  path="*" element={<Error/>}  /> */}
      </Routes>
    </React.Fragment>
  );
}

export default ReactRouterDom;
