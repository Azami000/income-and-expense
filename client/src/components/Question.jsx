"use client";

import Link from "next/link";
import React from "react";

export const Question = (props) => {
  return (
    <div className="flex flex-row gap-2">
      <div>{props.text}</div>

      {/* <Link href={`/${props.href}`}></Link> */}
    </div>
  );
};
