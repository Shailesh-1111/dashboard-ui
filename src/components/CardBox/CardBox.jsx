import React from "react";
import "./CardBox.scss";
import Icon from "../Icon/Icon";

const CardBox = ({ data }) => {
  if (!data) return null;

  return (
    <div className={`card-box ${data.cardType}`} style={data.cardType === "theme-independent" ? { backgroundColor: data.bgColor } : {}}>
      <div className="card-header">{data.title}</div>
      
      <div className="card-content">
        <div className="metric">{data.metric}</div>
        <div className="change-section">
          <span className="change">
            {data.change}
          </span>
          {data.updown && (
            <Icon
            name={data.updown === "up" ? "ArrowRise" : "ArrowFall"}
            width={12}
            fixedTheme={data.cardType === "theme-independent" ? "light" : undefined}
          />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBox;
