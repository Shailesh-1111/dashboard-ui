import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import './LineGraph.scss';
import Icon from '../Icon/Icon';
import HeaderSection from '../HeaderSection/HeaderSection';

const LineGraph = () => {
  const data = [
    { month: 'Jan', kapil: 8, saurabh: 12 },
    { month: 'Feb', kapil: 15, saurabh: 9 },
    { month: 'Mar', kapil: 18, saurabh: 7 },
    { month: 'Apr', kapil: 12, saurabh: 15 },
    { month: 'May', kapil: 10, saurabh: 18 },
    { month: 'Jun', kapil: 22, saurabh: 20 }
  ];

  // Custom ticks with M suffix
  const yTicks = [0, 10, 20, 30];

  // Format tick to add "M"
  const formatYAxisTick = (value) => {
    return value === 0 ? '0' : `${value}M`;
  };

  return (
    <div className="line-graph-container">
      {/* Header Section */}
      <div className="header-section">
        <HeaderSection 
          title="Revenue"
          data={[
            { name: "Current Week", amount: "$58,211" },
            { name: "Previous Week", amount: "$6,768" }
          ]}
        />
      </div>

      {/* Chart Section */}
      <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart

            data={data}
            margin={{ top: 0, right: 20, left: -25, bottom: 30 }}
          >
            {/* Horizontal grey lines */}
            <CartesianGrid 
              stroke="#e5e7eb" 
              vertical={false} 
              strokeDasharray="" 
            />

            {/* Y-axis labels with "M", no vertical line */}
            <YAxis 
              type="number"
              domain={[0, 30]}
              ticks={yTicks}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              axisLine={false}  // remove vertical line
              tickLine={false}
              tickFormatter={formatYAxisTick}
            />

            {/* X-axis */}
            <XAxis 
              dataKey="month"
              axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af', dy: 10 }}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />

            {/* Kapil's line */}
            <Line 
              type="natural" 
              dataKey="kapil" 
              stroke="#B1E3FF" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: '#7dd3fc' }}
            />

            {/* Saurabh's line */}
            <Line 
              type="natural" 
              dataKey="saurabh" 
              stroke="#1C1C1C" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: '#1f2937' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineGraph;
