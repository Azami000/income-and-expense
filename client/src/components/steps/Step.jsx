"use client";

export const Step = ({ step }) => {
  return (
    <div className="">
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Currency</li>
        <li className={`step ${step >= 1 && "step-primary"} `}>Balance</li>
        <li className={`step ${step >= 2 && "step-primary"} `}>Finish</li>
      </ul>
    </div>
  );
};
