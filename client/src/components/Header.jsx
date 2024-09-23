"use client";

import { Avatar } from "./Avatar";
import { Button } from "./Button";

export const Header = () => {
  return (
    <div className="flex flex-row w-screen h-[72px] px-32 py-4 justify-between">
      <div className="flex flex-row gap-6">
        <img src="/Vector.png" alt="" className="w-[40px] h-[40px]" />
        <div>Dashboard</div>
        <div>Records</div>
      </div>
      <div className="flex gap-6">
        <Button text={+Record} />
        <Avatar />
      </div>
    </div>
  );
};
