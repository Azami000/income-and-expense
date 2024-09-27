"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  LabelList,
} from "recharts";

const data = [
  {
    name: "Jan",
    expense: 4000,
    income: 2400,
  },
  {
    name: "Feb",
    expense: 3000,
    income: 1398,
  },
  {
    name: "Mar",
    expense: 4000,
    income: 9800,
  },
  {
    name: "Apr",
    uv: 2780,
    income: 3908,
  },
  {
    name: "May",
    expense: 1890,
    income: 4800,
  },
  {
    name: "June",
    expense: 2390,
    income: 3800,
  },
];
export const Chart = () => {
  return (
    <div className="w-[588px] h-[284px] bg-white rounded-xl  ">
      <div className="flex border-b-2 py-4 px-6">
        <div>Income - Expense</div>
      </div>
      <div className="flex py-8 px-6">
        <BarChart width={540} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="" offset={0} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: "", angle: -90, position: "insideLeft" }} />
          <Bar dataKey="income" fill="#84CC16"></Bar>
          <Bar dataKey="expense" fill="#F97316"></Bar>
        </BarChart>
      </div>
    </div>
  );
};
