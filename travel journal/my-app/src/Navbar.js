import React from "react";
import pic from "./IMG/globe.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={pic} />
      <span className="brand">My Travel Journal</span>
    </div>
  );
};

export default Navbar;
