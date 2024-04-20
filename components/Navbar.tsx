import { Button } from "./ui/button";
import { NAVBAR_LINKS } from "@/constants";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 py-2">
      <div className="max-container padding-container flexBetween">
        <div>
          <p className="font-bold text-xl">
            Flight <span className="text-slate-900">Finder</span>
          </p>
        </div>
        <div className="lg:hidden">
          <Sidebar />
        </div>
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex gap-6">
            {NAVBAR_LINKS.map((link) => (
              <Link key={link.title} href={link.link}>
                {link.title}
              </Link>
            ))}
          </div>
          <div>
            <Button>Book Now</Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
