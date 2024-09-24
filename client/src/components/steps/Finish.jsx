"use client";

import { Button } from "../Button";

export const Finish = ({ confirmHandler }) => {
  return (
    <div>
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
          <Button text={"Go to Dashboard"} onClick={confirmHandler} />
        </div>
      </div>
    </div>
  );
};
