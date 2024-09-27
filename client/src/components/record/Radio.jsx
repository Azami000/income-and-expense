"use client";

import React from "react";

export const Radio = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1>Types</h1>{" "}
      <div className="">
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio"
              defaultChecked
            />
            <span className="label-text">All</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span className="label-text">Income</span>
          </label>
        </div>
        <div className="form-control flex flex-row">
          <label className="label cursor-pointer">
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              defaultChecked
            />
            <span className="label-text">Expense</span>
          </label>
        </div>
      </div>
    </div>
  );
};
