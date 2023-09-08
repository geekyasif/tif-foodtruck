"use client";

import Image from "next/image";
import React from "react";
import FooterHeading from "./FooterHeading";
import FooterText from "./FooterText";
import FooterLink from "./FooterLink";
import FooterSocialLink from "./FooterSocialLink";

function Footer() {
  return (
    <div className="flex flex-col flex-wrap px-11 lg:flex-row lg:justify-between lg:px-28 lg:py-20 bg-[#F8F8F8] ">
      <div className="flex justify-center items-center mt-14">
        <Image
          src="/logo.png"
          height={50}
          width={161}
          alt="logo"
          className=" mt-8"
        />
      </div>
      <div className=" mt-11 lg:mt-0 flex flex-col justify-between lg:w-[217px] ">
        <FooterHeading text="Contact Us" />
        <FooterText
          text="Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434"
        />
        <FooterText text="example2020@gmail.com" />
        <FooterText text="(904) 443-0343" />
      </div>
      <div className="flex flex-col justify-between mt-7 lg:mt-0">
        <FooterHeading text="More" />
        <ul className="flex flex-col justify-between">
          <FooterLink url="about" text="About Us" />
          <FooterLink url="product" text="Product" />
          <FooterLink url="career" text="Career" />
          <FooterLink url="contact" text="Contact Us" />
        </ul>
      </div>

      <div className="flex flex-col justify-between">
        <div className=" lg:w-32  hidden lg:block">
          <FooterHeading text="Social Links" />
          <FooterSocialLink />
        </div>
        <div className="hidden lg:block">
          <FooterText text="© 2022 Food Truck Example" />
        </div>
        <div className="flex  flex-col justify-center items-center lg:hidden my-8 mb-28 ">
          <FooterText text="© 2022 Food Truck Example" />
          <FooterSocialLink />
        </div>
      </div>
    </div>
  );
}

export default Footer;
