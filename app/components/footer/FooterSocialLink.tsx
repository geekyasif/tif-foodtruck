"use client"

import { fbIcon, instaIcon, twitterIcon } from '@/app/utils/SocialIcons'
import Link from 'next/link'
import React from 'react'

function FooterSocialLink() {
  return (
    <div className="flex justify-between mt-3 w-[120px] lg:w-full">
    <Link href="/">{instaIcon}</Link>
    <Link href="/">{twitterIcon}</Link>
    <Link href="/">{fbIcon}</Link>
  </div>
  )
}

export default FooterSocialLink