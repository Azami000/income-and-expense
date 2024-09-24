"use client";

import React from "react";

export const Input1 = ({ name, type, placeholder, inputHandler }) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={inputHandler}
      required
      className="flex flex-col p-2 bg-gray-200 border rounded-md w-[370px] h-[45px]"
    />
  );
};
