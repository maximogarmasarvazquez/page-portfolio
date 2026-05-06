"use client";
import React from "react";
import { itemsNavbar } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <MotionTransition
      position="right"
      className="
        fixed bottom-4 left-0 right-0
        z-50
        flex justify-center
        px-3
      "
    >
      <nav className="w-full max-w-fit">
        <div
          className="
            flex items-center justify-center
            gap-1 sm:gap-2

            px-2 sm:px-4 py-2
            rounded-full

            bg-white/10 backdrop-blur-xl
            border border-white/10

            shadow-lg shadow-black/20
          "
        >
          {itemsNavbar.map((item) => {
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.id}
                href={item.link}
                className={`
                  relative flex items-center justify-center
                  p-2 sm:p-3 rounded-full
                  transition-all duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-sky-600 text-black scale-110"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <div className="text-current flex items-center justify-center">
                  {item.icon}
                </div>

                {isActive && (
                  <div
                    className="
                    absolute inset-0 rounded-full
                    bg-white/10 blur-lg
                    -z-10
                  "
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;