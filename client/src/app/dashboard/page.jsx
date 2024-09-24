"use client";

import { Card } from "@/components/Card";
import { Chart } from "@/components/Chart";
import { Header } from "@/components/Header";
import { Inex } from "@/components/Inex";

const mainPage = () => {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col bg-slate-100 py-4 px-28 gap-6">
        <div className="flex flex-row gap-6">
          <Card />
          <Inex text={"Your income"} />
          <Inex text={"Total Expenses"} />
        </div>
        <div className="flex flex-row">
          <Chart />
        </div>
      </div>
    </div>
  );
};
export default mainPage;
