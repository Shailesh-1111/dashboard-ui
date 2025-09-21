import React, { useEffect, useRef, useState } from "react";
import "./CentralPanel.scss";
import CardBox from "../CardBox/CardBox";
import BarGraph from "../BarGraph/BarGraph";
import LineGraph from "../LineGraph/LineGraph";
import MapSales from "../MapSales/MapSales";
import Map from "../Map/Map";
import TopSelling from "../TopSelling/TopSelling";
import DonutChart from "../DonutChart/DonutChart";

const CentralPanel = ({selectedTab ='eCommerce', cardData = [], listArray=[], donutData ={}}) => {


    const divRef = useRef(null);
    const [size, setSize] = useState({ width: 0, height: 0 });
  
    useEffect(() => {
      const updateSize = () => {
        if (divRef.current) {
          setSize({
            width: divRef.current.offsetWidth,
            height: divRef.current.offsetHeight,
          });
        }
      };
  
      updateSize();
      window.addEventListener("resize", updateSize);
  
      return () => window.removeEventListener("resize", updateSize);
    }, []);


  return (
    <div className="central-panel">
      <p className="header">{selectedTab}</p>

      <div className="row1">
        <div className="col flex-1 cards">
          {cardData?.map((item) => <CardBox data={item}/>)}
        </div>
        <div className="col flex-1-5"><BarGraph/></div>
      </div>

      <div className="row2">
        <div className="col flex-3 line-graph"><LineGraph/></div>
        <div className="col flex-1" ref={divRef}><MapSales width={size?.width} /></div>
      </div>

      <div className="row3">
        <div className="col flex-3"><TopSelling listArray={listArray}/></div>
        <div className="col flex-1"><DonutChart data = {donutData}/></div>
      </div>
    </div>
  );
};

export default CentralPanel;
