"use client";

import { Name } from "../Name";

export const Card = ({ amount }) => {
  return (
    <div className="flex relative">
      <img src="/card.png" alt="" className="w-[370px] " />
      <div className="flex absolute left-6 top-5 text-white">
        <Name />
      </div>

      <div className="flex flex-col absolute left-6 bottom-7 ">
        <div className="text-gray-400">Cash</div>
        <div className="flex  text-white ">{amount}</div>
      </div>
    </div>
  );
};
