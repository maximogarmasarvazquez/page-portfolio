"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const routes = [
  "/",
  "/about-me",
  "/services",
  "/portfolio",
  "/mas-info",
];

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = routes.indexOf(pathname);

  const goPrev = () => {
    if (currentIndex > 0) {
      router.push(routes[currentIndex - 1]);
    }
  };

  const goNext = () => {
    if (currentIndex < routes.length - 1) {
      router.push(routes[currentIndex + 1]);
    }
  };

  return (
    <>
      {/* ⬅️ IZQUIERDA */}
      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="
            hidden md:flex
            fixed left-6 top-1/2 -translate-y-1/2
            z-40

            p-3 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/10

            text-white/70 hover:text-white
            hover:bg-white/20

            transition-all duration-300
            hover:scale-110
          "
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {/* ➡️ DERECHA */}
      {currentIndex < routes.length - 1 && (
        <button
          onClick={goNext}
          className="
            hidden md:flex
            fixed right-6 top-1/2 -translate-y-1/2
            z-40

            p-3 rounded-full
            bg-white/10 backdrop-blur-md
            border border-white/10

            text-white/70 hover:text-white
            hover:bg-white/20

            transition-all duration-300
            hover:scale-110
          "
        >
          <ChevronRight size={28} />
        </button>
      )}
    </>
  );
};

export default SideNavigation;