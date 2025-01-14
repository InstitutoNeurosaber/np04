import React from 'react';
import { LucideIcon, MoreVertical } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export function MetricCard({ title, value, change, icon: Icon }: MetricCardProps) {
  return (
    <div className="bg-[#1C1D2C] rounded-xl p-6">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#2C2D3C] rounded-lg">
            <Icon className="w-5 h-5 text-gray-400" />
          </div>
          <div>
            <h3 className="text-sm text-gray-400">{title}</h3>
            <p className="text-xl font-bold mt-1">{value}</p>
          </div>
        </div>
        <button className="p-1.5 hover:bg-[#2C2D3C] rounded-lg transition-colors">
          <MoreVertical className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="mt-4">
        <span className={`text-sm ${change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {change >= 0 ? '+' : ''}{change}%
        </span>
      </div>
    </div>
  );
}