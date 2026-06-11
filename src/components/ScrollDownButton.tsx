"use client";

import { useEffect, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

const sectionIds = ["home", "about", "services", "mission", "quotes", "subscribe"];

const ScrollDownButton = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let activeIndex = 0;

      sectionIds.forEach((id, index) => {
        const section = document.getElementById(id);

        if (section) {
          const sectionTop = section.offsetTop;

          if (window.scrollY >= sectionTop - 180) {
            activeIndex = index;
          }
        }
      });

      setCurrentIndex(activeIndex);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextIndex =
      currentIndex >= sectionIds.length - 1 ? 0 : currentIndex + 1;

    const nextSection = document.getElementById(sectionIds[nextIndex]);

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <button
      type="button"
      onClick={scrollToNextSection}
      aria-label="Scroll to next section"
      className="fixed bottom-6 left-1/2 z-50 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-[#d8c6df]/80 bg-white/80 text-[#8f6ca1] shadow-[0_12px_30px_rgba(76,51,88,0.14)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#7d9b70] hover:bg-white hover:text-[#3b243f]"
    >
      <FiArrowDown size={24} className="animate-bounce" />
    </button>
  );
};

export default ScrollDownButton;