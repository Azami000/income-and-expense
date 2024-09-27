"use client";

import { Lend } from "./Lend";

export const LastRecord = () => {
  return (
    <div className="flex flex-col bg-white rounded-xl">
      <h1 className="flex border-b py-4 px-6">Last Record</h1>
      <div className="flex flex-col px-6">
        <Lend />
      </div>
    </div>
  );
};
