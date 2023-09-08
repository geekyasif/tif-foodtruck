"use client";

import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row ">
      <div className="w-full lg:w-1/2 px-24">
        <div className="hidden lg:block">
          <Image
            src="/logo.png"
            height={83}
            width={107}
            alt="logo"
            className=" mt-8"
          />
        </div>
        <div className=" flex flex-col justify-center items-center lg:justify-start lg:items-start">
          <h1 className="lg:mb-7  mt-20 lg:mt-28 w-[250px] lg:w-[367px] text-4xl lg:text-6xl font-bold text-secondary text-center lg:text-start leading-[46px]">
            Discover the <span className="text-primary">Best</span> Food and
            Drinks
          </h1>
          <p className=" my-7 text-xs lg:mt-7 lg:mb-10 lg:text-base font-normal text-custom-text-blue w-[249px] lg:w-[345px] lg:h-[55px] leading-5 text-center lg:text-start">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="bg-primary text-white lg:py-4 lg:px-9 rounded-full font-bold  text-xs lg:text-lg  w-[120px] h-[40px]  lg:w-[190px] lg:h-[63px]">
            Explore Now!
          </button>
        </div>
      </div>
      <div className="w-full h-[414px] lg:h-full lg:w-1/2">
        <div
          style={{
            backgroundImage: `url('/pizza.jpeg')`,
          }}
          className="bg-bottom bg-cover bg-no-repeat h-[414px] lg:h-screen lg:rounded-bl-[350px] rounded-bl-[160px] relative"
        >
          <div>
            <img src="/vector.png" className="w-full h-full" />
            <button className=" m-4 lg:mt-7 lg:mr-10 lg:w-32 lg:h-10 p-2 text-xs lg:text-base font-semibold border-white border-2 rounded-full bg-[#E23744] text-white float-right z-10 absolute top-0 right-0">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
