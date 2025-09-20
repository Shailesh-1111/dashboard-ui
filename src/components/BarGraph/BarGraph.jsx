import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import './BarGraph.scss';

// Dummy data that matches the chart pattern
const data = [
  { month: 'Jan', actuals: 18, projections: 2 },
  { month: 'Feb', actuals: 20, projections: 5 },
  { month: 'Mar', actuals: 19, projections: 2.5 },
  { month: 'Apr', actuals: 22, projections: 4 },
  { month: 'May', actuals: 15, projections: 3 },
  { month: 'Jun', actuals: 20, projections: 5 }
];

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
            data={data}
            margin={{
              top: 20,
              left: -20
            }}
            barCategoryGap="70%"
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