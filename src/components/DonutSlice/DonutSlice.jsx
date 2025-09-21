import React from "react";
import "./DonutSlice.scss";

const  DonutSlice = ({
  radius = 80,
  color = "#374151",
  startAngle = 0,
  endAngle = 90,
  thickness = 20,
  centerX = 150,
  centerY = 150,
  showBorder = true,
  label = "",
  percentage = "",
  onHover = null
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const hoverRadius = isHovered ? radius + 5 : radius;

  const startX = centerX + hoverRadius * Math.cos(startRad);
  const startY = centerY + hoverRadius * Math.sin(startRad);
  const endX = centerX + hoverRadius * Math.cos(endRad);
  const endY = centerY + hoverRadius * Math.sin(endRad);
  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

  const midAngle = (startAngle + endAngle) / 2;
  const midRad = (midAngle * Math.PI) / 180;
  const tooltipX = centerX + (radius + 30) * Math.cos(midRad);
  const tooltipY = centerY + (radius + 30) * Math.sin(midRad);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (onHover) onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (onHover) onHover(false);
  };

  return (
    <g
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="donut-slice"
    >
      {showBorder && (
        <>
          <path
            d={`M ${startX} ${startY} A ${hoverRadius} ${hoverRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
            className="donut-slice-border"
          />
          <circle cx={startX} cy={startY} r={(thickness + 4) / 2} className="donut-slice-border-circle" />
          <circle cx={endX} cy={endY} r={(thickness + 4) / 2} className="donut-slice-border-circle" />
        </>
      )}

      <path
        d={`M ${startX} ${startY} A ${hoverRadius} ${hoverRadius} 0 ${largeArcFlag} 1 ${endX} ${endY}`}
        className={`donut-slice-path ${isHovered ? "hovered" : ""}`}
        style={{ stroke: color, strokeWidth: thickness }}
      />
      <circle cx={startX} cy={startY} r={thickness / 2} className={`donut-slice-dot ${isHovered ? "hovered" : ""}`} style={{ fill: color }} />
      <circle cx={endX} cy={endY} r={thickness / 2} className={`donut-slice-dot ${isHovered ? "hovered" : ""}`} style={{ fill: color }} />

      {isHovered && (
        <g className="donut-slice-tooltip" >
          <rect className="tooltip-bg" x={tooltipX - 25} y={tooltipY - 15} width={50} height={25} rx={6} ry={6}/>
          <text  className="tooltip-text" x={tooltipX} y={tooltipY}  textAnchor="middle" dominantBaseline="middle">{percentage}%</text>
        </g>
      )}
    </g>
  );
}

export default DonutSlice;