"use client";

import Image from "next/image";
import React from "react";

interface IPropsCard {
  title: string,
  desc: string,
  image: string
}

function Card({title, desc, image}: IPropsCard) {
  return (
    <div className="w-full mb-16 lg:mb-0 lg:w-[30%] border-2 border-[#93A2D361] p-3 lg:p-7 rounded-3xl flex flex-col items-center">
      <div className="m-4 lg:m-0">
        <Image
          className=" rounded-3xl lg:rounded-xl"
          src={`/${image}`}
          width={457}
          height={200}
          alt="food1"
        />
      </div>
      <div className="px-4 mt-6 flex flex-col justify-center items-center lg:mt-9 lg:items-start lg:justify-start">
        <p className="mb-4 text-base text-secondary font-bold font-poppins">
          {title}
        </p>
        <p className="text-xs">{desc}</p>
        <button className="mb-10 mt-7 w-28 h-7  lg:w-32 lg:h-10 font-semibold border-secondary text-secondary rounded-full lg:mr-10 lg:p-2 text-xs lg:text-base  lg:border-white border-2 lg:bg-primary lg:text-white">
          Get In Touch
        </button>
      </div>
    </div>
  );
}

export default Card;
