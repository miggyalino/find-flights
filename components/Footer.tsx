import { NAVBAR_LINKS } from "@/constants";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <nav className="bg-white-200 py-2">
      <div className="max-container padding-container flexBetween">
        <Link href="/">
          <p className="font-bold text-xl">
            Flight <span className="text-slate-900">Finder</span>
          </p>
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6">
            {NAVBAR_LINKS.map((link) => (
              <Link key={link.title} href={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
        <div>©Copyright. All Rights Reserved</div>
      </div>
    </nav>
  );
};

export default Footer;
