import Link from "next/link";
import { useState } from "react";

import Button from "./Button";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  function handleHamburgerClick() {
    setMenuVisible((prev) => {
      return !prev;
    });
  }

  return (
    <>
      <style jsx global>{`
        ${menuVisible &&
        `body {
          overflow: hidden;
        }
        #nav {
          height: calc(100vh - 5rem)
        }
        `}
      `}</style>
      <div
        className={`bg-white bg-opacity-90 backdrop-blur-sm container shadow-lg sticky top-0 h-20 z-50 ${
          menuVisible && "md:fixed md:top-0 md:left-0 md:h-screen md:w-full md:flex md:flex-col md:pb-2 bg-opacity-100"
        }`}
      >
        <div className="container-padding flex justify-between py-4 items-center h-20">
          <Link href="/">
            <img src="/images/newtral-logo.svg" className="hover:cursor-pointer" />
          </Link>
          <nav className="flex gap-8 text-[#a1a0ae] font-medium md:hidden">
            <div className="hover:text-primary-two-base">
              <Link href="/products/carbon-accounting">Carbon Accounting</Link>
            </div>
            <div className="hover:text-primary-two-base">
              <Link href="/services/brsr-reporting">BRSR Reporting</Link>
            </div>
          </nav>
          {/* <div className="hidden md:flex" onClick={handleHamburgerClick}>
            <div className="space-y-2 hover:cursor-pointer">
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
              <div className="w-8 h-0.5 bg-gray-600"></div>
            </div>
          </div> */}
          <div className="hidden md:flex" onClick={handleHamburgerClick}>
            {menuVisible ? (
              <img src="/images/icons/cross.svg" alt="" />
            ) : (
              <img src="/images/icons/hamburger.svg" alt="" />
            )}
          </div>
          <div className="flex gap-4 md:hidden">
            <Link href={"/contact-sales"}>
              <Button className={"bg-[#25274c1a] py-3"}>Contact Sales</Button>
            </Link>
            <Link href={"/book-free-consultation"}>
              <Button className={"bg-secondary-one-base text-white py-2"}>Get Started</Button>
            </Link>
          </div>
        </div>
        <nav
          className={`container-padding hidden ${menuVisible && "md:flex md:flex-col md:w-full md:justify-between"}`}
          id="nav"
        >
          <div className="flex text-primary-two-base font-medium flex-col w-full border-t-2">
            <div className="hover:text-primary-two-base text-2xl font-semibold border-b-2 py-6">
              <Link href="/products/carbon-accounting">Carbon Accounting</Link>
            </div>
            <div className="hover:text-primary-two-base text-2xl font-semibold border-b-2 py-6">
              <Link href="/services/brsr-reporting">BRSR Reporting</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full min-h-fit">
            <Link href={"/contact-sales"}>
              <Button className={"bg-[#25274c1a] py-4"}>Contact Sales</Button>
            </Link>
            <Link href={"/book-free-consultation"}>
              <Button className={"bg-secondary-one-base text-white py-4"}>Get Started</Button>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
