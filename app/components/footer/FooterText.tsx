"use client";

import React from "react";

interface IPropFooterText {
  text: string;
}

function FooterText({ text }: IPropFooterText) {
  return <p className=" mt-3 text-sm font-serif text-custom-text-gray leading-6 ">{text}</p>;
}

export default FooterText;
