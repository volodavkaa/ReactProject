import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const UserStatsChart = () => {
  const data = [
    { name: 'Active Users', value: 50 },
    { name: 'Inactive Users', value: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1e1e1e', 
        borderRadius: '8px', 
      }}
    >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#333',
            color: '#FFF',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
          }}
          cursor={{ fill: '#f0f0f0', opacity: 0.3 }}
        />
        <Legend
          wrapperStyle={{
            color: '#FFF',
            fontSize: '14px',
            textAlign: 'center',
          }}
        />
      </PieChart>
    </div>
  );
};

export default UserStatsChart;
