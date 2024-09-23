"use client";

import { Loading } from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Currency } from "@/components/steps/Currency";
import { Balance } from "@/components/steps/Balance";
import { Finish } from "@/components/steps/Finish";
import { Step } from "@/components/steps/Step";
import { Name } from "@/components/Name";

const Conditionals = [Currency, Balance, Finish];

const StepPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const ChosenComponent = Conditionals[step];

  const confirmHandler = () => {
    if (step == 2) {
      router.push("/");
      return;
    }
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col ">
      <Name />
      <Step step={step} />

      <ChosenComponent confirmHandler={confirmHandler} step={step} />
    </div>
  );
};

export default StepPage;
