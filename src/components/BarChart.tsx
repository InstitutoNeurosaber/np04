import React from 'react';

export function BarChart() {
  const data = [65, 45, 75, 55, 60, 45, 85, 65, 75, 50, 65, 70];
  const maxValue = Math.max(...data);

  return (
    <div className="flex items-end justify-between h-full gap-1">
      {data.map((value, index) => (
        <div
          key={index}
          className="w-full bg-indigo-500/20 rounded-sm relative group hover:bg-indigo-500/30 transition-colors"
          style={{ height: `${(value / maxValue) * 100}%` }}
        >
          <div
            className="absolute bottom-0 left-0 w-full bg-indigo-500 rounded-sm transition-all duration-300"
            style={{ height: `${(value / maxValue) * 100}%` }}
          ></div>
        </div>
      ))}
    </div>
  );
}