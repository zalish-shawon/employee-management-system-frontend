// components/StatsCard.tsx
import React from "react";

export default function StatsCard({
  title,
  value,
  color = "bg-blue-500",
}: {
  title: string;
  value: string | number;
  color?: string;
}) {
  return (
    <div className="p-5 bg-white rounded shadow hover:shadow-md transition">
      <div className="text-sm text-gray-500">{title}</div>
      <div className={`text-3xl font-semibold mt-1 ${color} bg-clip-text text-transparent`}>
        {value}
      </div>
    </div>
  );
}
