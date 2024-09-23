"use client";

import React from "react";

export const Loading = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-center items-center">
      <span
        className="loading loading-spinner loading-xl
    l text-blue-600"
      ></span>
    </div>
  );
};
