import React from "react";
import "./Map.scss";
import Icon from "../Icon/Icon";


const Map = ({ image,  points = [], width = 154, height = 170 }) => {
  // Convert lat/long to x/y (assuming equirectangular map projection)
  const project = (lat, lon) => {
    const x = ((lon + 180) / 360) * width;        // map longitude -180..180 → 0..width
    const y = ((90 - lat) / 180) * height;        // map latitude 90..-90 → 0..height
    return { x, y };
  };

  return (
    <div className="image-map-container" style={{ width, height }}>
    
    <Icon name="Map" width={width} height={height}/>
      {points.map((p) => {
        const { x, y } = project(p.lat, p.lon);
        return (
          <div
            key={p.id || `${p.lat}-${p.lon}`}
            className="map-dot"
            style={{
              left: x,
              top: y,
              width: p.size || 10,
              height: p.size || 10,
            }}
            title={p.name}
          />
        );
      })}
    </div>
  );
};

export default Map;
