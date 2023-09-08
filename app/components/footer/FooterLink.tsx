"use client";

import Link from "next/link";
import React from "react";

interface IPropsFooterLink {
  text: string;
  url: string;
}

function FooterLink({ text, url }: IPropsFooterLink) {
  return (
    <li className="mt-4">
      <Link
        className=" font-serif text-custom-text-gray text-sm leading-7 font-normal "
        href={`/${url}`}
      >
        {text}
      </Link>
    </li>
  );
}

export default FooterLink;
 