import React from "react";
import "./HorizontalBar.scss";

const HorizontalBar = ({ value, max = 100 }) => {
  const widthPercent = Math.min((value / max) * 100, 100);

  return (
    <div className="horizontal-bar">
      <div className="horizontal-bar-fill" style={{ width: `${widthPercent}%` }} />
    </div>
  );
};

export default HorizontalBar;
