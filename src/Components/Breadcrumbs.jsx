import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { NavLink, useLocation } from "react-router-dom";

function handleClick(event) {
  event.preventDefault();
}
export default function ActiveLastBreadcrumb() {
  const path = useLocation();
    return (
    <div role="presentation" onClick={handleClick} className="breadcrumb">
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <NavLink underline="hover" color="inherit" to="/">
          Home
        </NavLink>
        <NavLink underline="hover" color="inherit" to={path.pathname}>
          {path.pathname === "/" ? "" : (path.pathname).slice(1)}
        </NavLink>
      </Breadcrumbs>
    </div>
  );
}
