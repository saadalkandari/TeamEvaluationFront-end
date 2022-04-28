import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      Home
      <NavLink to="/signin" className="Auth-link">
        Log in
      </NavLink>
      <NavLink to="/signup" className="Auth-link">
        register
      </NavLink>
    </div>
  );
}

export default Home;
