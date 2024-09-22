"use client";

import React from "react";

export const Select = (props) => {
  return (
    <div>
      <select className="select select-bordered max-w-xs bg-gray-200 w-[384px]">
        <option disabled selected>
          {props.qustion}
        </option>
        <option>{props.text1}</option>
        <option>{props.text}</option>
        <option>{props.texts}</option>
      </select>
    </div>
  );
};
