import { Name } from "@/components/Name";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <Name />
      <div>
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Currancy</li>
          <li className="step ">Balance</li>
          <li className="step ">Finish</li>
        </ul>
      </div>
      <div className="flex felx-col items-center justify-center">
        <div className="flex flex-col">
          <img src="/Frame.png" alt="" className="flex w-12 h-12" />
          <div>Select base currency</div>
        </div>
      </div>
    </div>
  );
};

export default page;
