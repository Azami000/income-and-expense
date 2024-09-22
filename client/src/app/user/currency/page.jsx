"use client";

import { Button } from "@/components/Button";
import { Name } from "@/components/Name";
import { Select } from "@/components/Select";

const currencyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-28">
      <div className="flex flex-col pt-10 items-center gap-12">
        <Name />
        <div className="flex flex-row">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li className="step step-primary">Currancy</li>
            <li className="step ">Balance</li>
            <li className="step ">Finish</li>
          </ul>
        </div>
      </div>
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
          <Button text={"Confirm"} />
        </div>
      </div>
    </div>
  );
};

export default currencyPage;
