import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './BarGraph.scss';
import { barGraphData } from '../../data/mockData';

const BarGraph = () => {
  const formatYAxisTick = (value) => {
    if (value >= 1000000) {
      return `${value / 1000000}M`;
    }
    return `${value}M`;
  };

  return (
    <div id="bar-graph-container">
      <h2 id="bar-graph-title">
        Projections vs Actuals
      </h2>
      
      <div id="chart-wrapper">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={barGraphData}
            margin={{
              top: 20,
              left: -20
            }}
            barCategoryGap="65%"
          >
            <CartesianGrid 
              strokeDasharray="" 
              stroke="#ededed"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              tickFormatter={formatYAxisTick}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="#7fb3d3"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="#b8d4ea"
              radius={[5, 5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
 
    </div>
  );
};

export default BarGraph;