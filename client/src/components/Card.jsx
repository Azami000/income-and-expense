"use client";

import { Name } from "./Name";

export const Card = () => {
  return (
    <div className="flex relative">
      <img src="/card.png" alt="" className="w-[370px] " />
      <Name />
      <div className="flex absolute  left-4 bottom-3  ">
        <div>Cash</div>
        <div>10000</div>
      </div>
    </div>
  );
};
