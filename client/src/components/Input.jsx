"use client";

import React from "react";

export const Input = (props) => {
  return (
    <div>
      {props.name}
      {props.type}
      {props.placeholder}
    </div>
  );
};
