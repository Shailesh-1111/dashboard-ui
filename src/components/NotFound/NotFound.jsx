import React from "react";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1>This Page is Coming Soon</h1>
      <div className="notfound-links">
        <span onClick={() => window.location.href = "/"}>GO TO Home</span>
        <span onClick={() => window.location.href = "/dashboard?dash-e-commerce"}>E-Commerce</span>
        <span onClick={() => window.location.href = "/dashboard?fav-overview"}>Overview</span>
      </div>
    </div>
  );
};

export default NotFound;
