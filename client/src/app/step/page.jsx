"use client";

import { Loading } from "@/components/Loading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Currency } from "@/components/steps/Currency";
import { Balance } from "@/components/steps/Balance";
import { Finish } from "@/components/steps/Finish";
import { Step } from "@/components/steps/Step";
import { Name } from "@/components/Name";
import axios from "axios";
import { useUser } from "@/provider/UserProvider";

const Conditionals = [Currency, Balance, Finish];

const StepPage = () => {
  const { token } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);

  const [hello, setHello] = useState({
    currency: "MNT",
    balance: "",
  });

  const inputHandler = async (event) => {
    const name = event.target.name;
    setHello((prev) => ({ ...prev, [name]: event.target.value }));
  };
  console.log(hello);

  const ChosenComponent = Conditionals[step];

  const confirmHandler = async () => {
    const token = window.localStorage.getItem("token");
    if (step === 2) {
      try {
        await axios.post(
          "http://localhost:8000/step",
          {
            currency: hello.currency,
            balance: hello.balance,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        router.push("/dashboard");
      } catch (error) {
        console.error(error);

        // alert("Error: " + error.response.data.message || "Unauthorized");
      }
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
    <div className="flex flex-col justify-center items-center gap-24">
      <div className="flex items-center gap-10 pt-8 flex-col">
        <Name />
        <Step step={step} />
      </div>
      <div>
        <ChosenComponent
          confirmHandler={confirmHandler}
          step={step}
          inputHandler={inputHandler}
        />
      </div>
    </div>
  );
};

export default StepPage;
