import React from "react";
import Navbar from "./Navbar";
import Data from "./Data";
import Maincontent from "./Maincontent";

const App = () => {
  const items = Data.map(item => {
    return (
      <Maincontent
        key={item.id}
        item = {item}
      />
    )
  })
  return (
    <div className="container">
      <div>
        <Navbar />
        {items}
      </div>
    </div>
  );
};

export default App;
