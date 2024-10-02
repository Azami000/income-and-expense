"use client";

import { Button } from "../Button";
import { Amount } from "./Amount";
import { Category } from "./Category";
import { Radio } from "./Radio";

export const Record = () => {
  return (
    <div className="flex flex-col w-[282px] border rounded-xl py-6 px-4 bg-[#E5E7EB] gap-6">
      <div className="flex flex-col gap-6">
        <h1>Records</h1>
        <div className="flex w-[250px] h-[32px]">
          <Button text={"+ Add"} />
        </div>
      </div>
      <div className="">
        <input
          type=""
          placeholder="Search"
          className="flex bg-[#F9FAFB] border rounded-md pl-2 w-[250px]"
        />
      </div>
      <Radio />
      <div>
        <div className="flex ">
          <div>Category</div>
        </div>
        <Category text={"Food $ Drinks"} />
        <Category text={"Shopping"} />
      </div>
      <Amount />
    </div>
  );
  x;
};
