"use client";

import React from "react";

export const Amount = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>Amount Range</div>
      <div className="flex gap-4">
        <div className="flex flex-row gap-4 ">
          <input type="text" className="flex rounded-lg  w-[114px] h-[48px]" />
          <input type="text" className="flex rounded-lg  w-[114px] h-[48px]" />
        </div>
      </div>
    </div>
  );
};
