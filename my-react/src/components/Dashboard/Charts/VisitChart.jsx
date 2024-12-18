import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', visits: 10 },
  { month: 'Feb', visits: 20 },
  { month: 'Mar', visits: 30 },
  { month: 'Apr', visits: 40 },
  { month: 'May', visits: 50 },
  { month: 'Jun', visits: 60 },
];

const VisitChart = () => {
  return (
    <div style={{
      width: '100%',
      height: '400px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      borderRadius: '8px',
    }}>
      <ResponsiveContainer width="90%" height="100%">
        <BarChart data={data}>
          {}
          <XAxis
            dataKey="month"
            tick={{ fill: '#FFF', fontSize: 14 }}
            tickLine={{ stroke: '#FFF' }}
          />
          <YAxis
            tick={{ fill: '#FFF', fontSize: 14 }} 
            tickLine={{ stroke: '#FFF' }}
            axisLine={{ stroke: '#FFF' }}
          />
          <Tooltip
            cursor={{ fill: '#f0f0f0', opacity: 0.3 }} 
            contentStyle={{
              backgroundColor: '#333',
              border: 'none',
              borderRadius: '4px',
              color: '#FFF',
              fontSize: '14px',
            }}
            labelStyle={{ color: '#00C49F' }}
          />
          <Bar dataKey="visits" fill="#1890ff" radius={[4, 4, 0, 0]}>
            <LabelList
              dataKey="visits"
              position="top"
              style={{
                fill: '#FFF',
                fontSize: 14,
              }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VisitChart;
