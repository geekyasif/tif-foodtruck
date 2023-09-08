"use client";

import React from "react";

function About() {
  return (
    <section className=" mt-16 mb-32 py-36 px-12 lg:mb-0 lg:py-0 lg:flex lg:my-40 lg:px-52 lg:h-[467px] bg-custom-bg-primary">
      <div className="hidden lg:block">
        <img
          src="/about.jpeg"
          alt="about"
          className="h-[467px] lg:w-[484px] object-cover"
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="lg:w-[447px] flex flex-col items-center lg:items-start ">
          <h2 className=" text-2xl lg:text-5xl text-[#0E2368] font-semibold ">
            About us
          </h2>
          <p className="my-7  text-xs lg:text-base text-custom-text-blue text-center lg:text-start leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>

          <button className="bg-[#E23744] text-white  py-3 px-8 lg:py-4 lg:px-9 rounded-full font-bold lg:text-base text-xs">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
