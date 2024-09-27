"use client";

import React from "react";

export const Lend = () => {
  return (
    <div className="flex justify-between border-b py-5">
      <div className="flex flex-row gap-4">
        <img src="/Group.png" alt="" className="w-10 h-10" />
        <div className="flex flex-col ">
          <h1>Lending & Renting</h1>
          <p className="text-xs text-gray-500">3 hours ago</p>
        </div>
      </div>
      <div className="flex flex-row gap-2 text-lime-500">
        <div>-</div>
        <div className="">1,000₮</div>
      </div>
    </div>
  );
};
