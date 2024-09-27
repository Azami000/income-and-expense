"use client";

import { Header } from "@/components/dashboard/Header";
import { Record } from "@/components/record/Record";
import React from "react";

const recordPage = () => {
  return (
    <div>
      <Header />
      <Record />
    </div>
  );
};

export default recordPage;
