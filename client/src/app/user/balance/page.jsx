"use client";

import { Button } from "@/components/Button";
import { Input1 } from "@/components/Input";
import { Name } from "@/components/Name";

import React from "react";

export const balancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div className="flex flex-col pt-10 items-center gap-12">
        <Name />
        <div className="flex flex-row">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currancy</li>
            <li className="step step-primary">Balance</li>
            <li className="step ">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[384px] gap-8">
        <div className="flex felx-col items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <img src="/Fra.png" alt="" className="flex w-12 h-12" />
            <div>Set up your cash Balance</div>
          </div>
        </div>
        <div className="w-[370px]">
          <Input1 placeholder={"Balance"} />
        </div>
        <div>How much cash do you have in your wallet?</div>
        <div className="flex w-[380px] text-white">
          <Button text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};
export default balancePage;
