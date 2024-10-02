"use client";

import { Header } from "@/components/dashboard/Header";
import { Record } from "@/components/record/Record";

import React from "react";

const RecordPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-row">
        <Record />
        
      </div>
    </div>
  );
};

export default RecordPage;
