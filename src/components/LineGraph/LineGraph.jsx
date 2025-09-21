import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import './LineGraph.scss';
import Icon from '../Icon/Icon';
import HeaderSection from '../HeaderSection/HeaderSection';
import { lineGraphData, lineGraphHeaderData } from '../../data/mockData';
import { ThemeContext } from '../../context/ThemeContext';

const LineGraph = () => {

  const yTicks = [0, 10, 20, 30];
  const {dark} = useContext(ThemeContext);

  const formatYAxisTick = (value) => {
    return value === 0 ? '0' : `${value}M`;
  };

  return (
    <div className="line-graph-container">
      <div className="header-section">
        <HeaderSection 
          title="Revenue"
          data={lineGraphHeaderData}
        />
      </div>

      <div className="chart-wrapper" style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart

            data={lineGraphData}
            margin={{ top: 0, right: 20, left: -25, bottom: 30 }}
          >
            <CartesianGrid 
              stroke="#e5e7eb" 
              vertical={false} 
              strokeDasharray="" 
            />

            <YAxis 
              type="number"
              domain={[0, 30]}
              ticks={yTicks}
              tick={{ fontSize: 12, fill: '#9ca3af' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={formatYAxisTick}
            />

            <XAxis 
              dataKey="month"
              axisLine={{ stroke: '#e5e7eb', strokeWidth: 1 }}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#9ca3af', dy: 10 }}
              interval={0}
              padding={{ left: 10, right: 10 }}
            />

            <Line 
              type="natural" 
              dataKey="kapil" 
              stroke="#B1E3FF" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 4, fill: '#7dd3fc' }}
            />

            <Line 
              type="natural" 
              dataKey="saurabh" 
              stroke= {dark ?  "#C6C7F8" : "#1C1C1C"}
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
