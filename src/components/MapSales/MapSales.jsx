import React from "react";
import Map from "../Map/Map";
import "./MapSales.scss";
import HorizontalBar from "../HorizontalBar/HorizontalBar";
import { mapSalesData } from "../../data/mockData";

const MapSales = ({ title = "Revenue by Location", salesData = mapSalesData, width = 154 }) => {
  const points = salesData.map((d) => ({
    id: d.id,
    lat: d.lat,
    lon: d.lon,
    color: "#4caf50",
    size: 10,
    revenue: d.revenue,
    location: d.location,
  }));

  return (
    <div className="map-sales">
      <div className="map-sales-header">{title}</div>

      <div className="map-sales-map">
        <Map points={points} width={width}/>
        <div className="map-sales-data">
        {points.slice(0,3).map((p) => (
        <div key={p.id} className="map-sales-bar">
            <div className="map-sales-label">
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
