"use client";

import React from "react";

export const Select = (props) => {
  return (
    <div>
      <select
        onChange={props.inputHandler}
        className="select select-bordered max-w-xs bg-gray-200 w-[384px]"
        name="currency"
      >
        <option>{props.qustion}</option>
        <option>{props.text}</option>
        <option>{props.texts}</option>
      </select>
    </div>
  );
};
