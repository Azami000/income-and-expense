"use client";

import { Card } from "@/components/dashboard/Card";
import { Chart } from "@/components/dashboard/Chart";
import { Header } from "@/components/dashboard/Header";
import { Inex } from "@/components/dashboard/Inex";
import { LastRecord } from "@/components/dashboard/LastRecord";
import { Piechart } from "@/components/dashboard/Piechart";

const MainPage = async() => {


  return (
    <div className="">
      <Header />
      <div className="flex flex-col bg-slate-100 py-4 px-28 gap-6">
        <div className="flex flex-row gap-6">
          <Card />
          <Inex
            text={"Your income"}
            amount={"1,200,000.00"}
            zurag={"/income.png"}
          />
          <Inex
            text={"Total Expenses"}
            amount={"-1,200,000.00"}
            zurag={"expense.png"}
          />
        </div>
        <div className="flex flex-row gap-20">
          <Chart />
          <Piechart />
        </div>
        <LastRecord />
      </div>
    </div>
  );
};
export default MainPage;
