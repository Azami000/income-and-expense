"use client";

import { Button } from "@/components/Button";
import { Name } from "@/components/Name";
import React from "react";

const finishPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div className="flex flex-col pt-10 items-center gap-12">
        <Name />
        <div className="flex flex-row">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currancy</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-[384px] gap-8">
        <div className="flex felx-col items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <img src="/good.png" alt="" className="flex w-12 h-12" />
            <div>Good Job!</div>
          </div>
        </div>
        <div>
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </div>
        <div className="flex w-[380px] text-white">
          <Button text={"Go to Dashboard"} />
        </div>
      </div>
    </div>
  );
};

export default finishPage;
