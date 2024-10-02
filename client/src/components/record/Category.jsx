"use client";

import React from "react";

export const Category = ({ text }) => {
  return (
    <div className="flex justify-between ">
      <div className="flex flex-row rounded-lg gap-2 px-2">
        <img src="/lead.png" alt="" className="w-5 h-5" />
        <div>{text}</div>
      </div>
      <img src="/sum.png" alt="" className="w-5 h-5" />
    </div>
  );
};
