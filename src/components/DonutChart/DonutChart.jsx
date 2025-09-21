import React from "react";
import "./DonutChart.scss";
import DonutSlice from "../DonutSlice/DonutSlice";

const DonutChart = ({
  data = [],
  radius = 65,
  thickness = 25,
  width = 180,
  height = 180,
  showBorder = true
}) => {
  const defaultColors = ["#ef4444", "#22c55e", "#3b82f6", "#f59e0b", "#8b5cf6", "#ec4899", "#06b6d4", "#84cc16"];
  const processedData = data.map((item, index) => ({ ...item, color: item.color || defaultColors[index % defaultColors.length] }));

  const centerX = width / 2;
  const centerY = height / 2;
  const total = processedData.reduce((sum, item) => sum + item.value, 0);

  if (total === 0) {
    return <div className="pie-chart-empty">No data available</div>;
  }

  let currentAngle = 0;
  const slices = processedData.map((item) => {
    const sliceAngle = (item.value / total) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + sliceAngle;
    currentAngle = endAngle;
    return { ...item, startAngle, endAngle, percentage: ((item.value / total) * 100).toFixed(1) };
  });

  return (
    <div className="pie-chart-container-wrapper">
      <h3>Total Sales</h3>
      <div className="pie-chart-container">
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {slices.map((slice, index) => (
            <DonutSlice
              key={index}
              radius={radius}
              color={slice.color}
              startAngle={slice.startAngle - 90}
              endAngle={slice.endAngle - 90}
              thickness={thickness}
              centerX={centerX}
              centerY={centerY}
              showBorder={showBorder}
              label={slice.label}
              percentage={slice.percentage}
            />
          ))}
        </svg>
      </div>
      <div className="donut-legend">
        {processedData.map((item, index) => (
          <div key={index} className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: item.color }}></span>
            <span className="legend-name">{item.label}</span>
            <span className="legend-value">${item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonutChart;
