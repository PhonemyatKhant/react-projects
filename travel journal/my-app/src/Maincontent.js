import React from "react";
import icon from "./IMG/location.png";
const Maincontent = (prop) => {
  return (
    <div className="item-container">
      <div className="item">
        <div className="img-container">
          <img className="web-img" src={prop.item.imageUrl} />
        </div>
        <div className="text-box">
          <div className="info">
            <img className="icon" src={icon} />
            <span className="location">{prop.item.location}</span>
            <a href={prop.item.googleMapsUrl}>View on google map</a>
          </div>
          <h2>{prop.item.title}</h2>
          <h4>{`${prop.item.startDate}-${prop.item.endDate}`}</h4>
          <p>{prop.item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
