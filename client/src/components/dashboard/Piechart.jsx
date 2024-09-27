"use client";

import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export const Piechart = () => {
  const data = [
    { name: "Food", value: 400 },
    { name: "Bills ", value: 300 },
    { name: "Cloding", value: 300 },
    { name: "Insurance ", value: 200 },
    { name: "Shopping", value: 200 },
  ];
  const COLORS = ["#E74694", "#1C64F2", "#F2901C", "#16BDCA", "#FDBA8C"];
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl  ">
      <div className="flex border-b-2 py-4 px-6">
        <div>Income - Expense </div>
      </div>
      <div className="flex flex-row py-1 px-6">
        <PieChart width={540} height={200}>
          <Pie
            data={data}
            cx={90}
            cy={90}
            innerRadius={40}
            outerRadius={70}
            // fill="#8884d8"
            // paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};
