"use client";

import React from "react";
import { Name } from "../Name";
import { Step } from "./Step";
import { Select } from "../Select";
import { Button } from "../Button";

export const Currency = ({ confirmHandler }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-[384px] gap-8">
        <div className="flex felx-col items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <img src="/Frame.png" alt="" className="flex w-12 h-12" />
            <div>Select base currency</div>
          </div>
        </div>
        <Select
          qustion={"MNT - Mongolian Tugrik"}
          text1={"MNT - Mongolian Tugrik"}
          text={"USD - US dollars"}
          texts={"KRW - Korean won"}
        />
        <div>
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one{" "}
        </div>
        <div className="flex w-[370px] text-white">
          <Button text={"Confirm"} onClick={confirmHandler} />
        </div>
      </div>
    </div>
  );
};
