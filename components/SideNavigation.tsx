"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const routes = [
  "/",
  "/about-me",
  "/services",
  "/portfolio",
  "/mas-info",
];

const SWIPE_THRESHOLD = 80;

const SideNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const distance = touchStartX.current - touchEndX.current;

    // Swipe izquierda → siguiente
    if (distance > SWIPE_THRESHOLD) {
      goNext();
    }

    // Swipe derecha → anterior
    if (distance < -SWIPE_THRESHOLD) {
      goPrev();
    }
  };

  return (
    <>
      {/* ========================= */}
      {/* DESKTOP - FLECHAS */}
      {/* ========================= */}

      {currentIndex > 0 && (
        <button
          onClick={goPrev}
          className="
            hidden md:flex
            fixed left-6 top-1/2 -translate-y-1/2
            z-40

            items-center justify-center

            w-14 h-14
            rounded-full

            bg-white/10 backdrop-blur-xl
            border border-white/10

            text-white/70 hover:text-white
            hover:bg-white/20

            shadow-lg shadow-black/20

            transition-all duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <ChevronLeft size={28} />
        </button>
      )}

      {currentIndex < routes.length - 1 && (
        <button
          onClick={goNext}
          className="
            hidden md:flex
            fixed right-6 top-1/2 -translate-y-1/2
            z-40

            items-center justify-center

            w-14 h-14
            rounded-full

            bg-white/10 backdrop-blur-xl
            border border-white/10

            text-white/70 hover:text-white
            hover:bg-white/20

            shadow-lg shadow-black/20

            transition-all duration-300
            hover:scale-110
            active:scale-95
          "
        >
          <ChevronRight size={28} />
        </button>
      )}

      {/* ========================= */}
      {/* MOBILE - SWIPE */}
      {/* ========================= */}

      <div
        className="md:hidden fixed inset-0 z-30"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
    </>
  );
};

export default SideNavigation;