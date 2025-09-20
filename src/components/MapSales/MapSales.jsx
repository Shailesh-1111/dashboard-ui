import React from "react";
import Map from "../Map/Map";
import "./MapSales.scss";
import HorizontalBar from "../HorizontalBar/HorizontalBar";

// Example sales data with lat/lon
const defaultSalesData = [
  { id: "ny", location: "New York", revenue: 72, lat: 40.7128, lon: -74.006 },
  { id: "sf", location: "San Francisco", revenue: 39, lat: 37.7749, lon: -122.4194 },
  { id: "syd", location: "Sydney", revenue: 25, lat: -33.8688, lon: 151.2093 },
  { id: "sgp", location: "Singapore", revenue: 61, lat: 1.3521, lon: 103.8198 },
];

const MapSales = ({ title = "Revenue by Location", salesData = defaultSalesData, width = 154 }) => {
  // Convert salesData to Map points
  const points = salesData.map((d) => ({
    id: d.id,
    lat: d.lat,
    lon: d.lon,
    color: "#4caf50", // green line/dot
    size: 10,
    revenue: d.revenue,
    location: d.location,
  }));

  return (
    <div className="map-sales">
      <div className="map-sales-header">{title}</div>

      <div className="map-sales-map">
        {/* Pass points to Map */}
        <Map points={points} width={width}/>

        {/* Show labels/lines */}
        <div className="map-sales-data">
        {points.slice(0,3).map((p) => (
        <div className="map-sales-bar">
            <div key={p.id} className="map-sales-label">
                <div>{p.location}</div>
                <div>{p.revenue}K</div>
            </div>
            <HorizontalBar value={p.revenue}/>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MapSales;
