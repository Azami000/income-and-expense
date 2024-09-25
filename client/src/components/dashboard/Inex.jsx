"use client";

export const Inex = ({ text, amount, zurag }) => {
  return (
    <div className="w-[384px] h-[216px] rounded-xl bg-white gap-7">
      <div className="flex  relative py-5 px-7 flex-row gap-3">
        <div className="absolute left-3 top-8 bg-green-500 rounded-full w-[8px] h-2"></div>
        <div className="flex ">{text}</div>
      </div>
      <div className="flex border-b-2"></div>
      <div className="flex flex-col gap-4 py-5 px-6">
        <div className="flex flex-col gap-1">
          <div className="flex font-semibold text-2xl flex-row">
            <div className="">{amount}</div>
            <div>₮</div>
          </div>
          <div className="flex text-gray-500">Your income amount</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="w-4 h-4 ">
            <img src={zurag} alt="" />
          </div>
          <div>32% from last month</div>
        </div>
      </div>
    </div>
  );
};
