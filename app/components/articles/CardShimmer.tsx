"use client";

import React from "react";

function CardShimmer() {
  return (
    <div className="w-full mb-16 h-[650px] lg:mb-0 lg:w-[30%] border-2 border-[#93A2D361] p-3 lg:p-7 rounded-3xl ">
      <div className="m-4 lg:m-0 lg:w-[457px] h-[200px] bg-gray-400 animate-pulse rounded"></div>
      <div className="mt-4 ">
        <div className="bg-gray-400 animate-pulse h-4 w-full rounded mb-4 m-auto"></div>
        <div className="bg-gray-400 animate-pulse h-4 w-full rounded mb-4 m-auto"></div>
        <div className="bg-gray-400 animate-pulse h-4 w-full rounded m-auto"></div>
      </div>
    </div>
  );
}

export default CardShimmer;
