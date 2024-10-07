"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "@/public/logo.png";
import MobileNav from "./MobileNav";

const headerLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Locations", path: "/locations" },
  { name: "Contact us", path: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  return (
    <main className="bg-white fixed shadow-sm w-full top-0 z-[1000]">
      <header className="container">
        <div className="flex flex-row justify-between items-center">
          <div className="flex-start">
            <Link href="/">
              <Image
                className="p-1"
                src={Logo}
                width={150}
                height={80}
                alt="Logo"
              />
            </Link>
          </div>

          <nav className="list-none lg:flex flex-row justify-end items-center hidden">
            {headerLinks.map((item) => {
              const isActive =
                (pathname.includes(item?.path) && item?.path?.length > 1) ||
                pathname === item?.path;

              const linkClasses = `text-md font-regular border-b-2 border-[#fff] hover:text-[#000076] mx-4 px-2 py-4 transition-colors duration-600 ease-in-out ${
                isActive ? "text-[#000076] border-b-2 !border-[#000076]" : ""
              }`;

              return (
                <Link
                  href={item?.path}
                  key={item?.name}
                  className={linkClasses}>
                  {item?.name}
                </Link>
              );
            })}
          </nav>
          <div className="justify-end flex lg:hidden ">
            <MobileNav />
          </div>
          <div className="hidden lg:flex">
            <Link href="#cta">
              <Button className="bg-primary hover:bg-white hover:text-[#000076] border border-[#000076]">
                Enquire
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Header;
