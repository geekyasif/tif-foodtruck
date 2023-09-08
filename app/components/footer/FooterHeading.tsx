"use client";

import React from "react";

interface IPropsFooterHeading {
  text: string;
}

function FooterHeading({ text }: IPropsFooterHeading) {
  return <p className="text-lg font-semibold text-secondary leading-7 font-serif tracking-wider">{text}</p>;
}

export default FooterHeading;
