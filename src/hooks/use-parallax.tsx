import { useEffect, useState } from "react";

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    transform: `translateY(${offset * speed}px)`,
  };
};

export const useElementParallax = (speed: number = 0.3) => {
  const [style, setStyle] = useState({ transform: "translateY(0px)" });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setStyle({
        transform: `translateY(${scrolled * speed}px)`,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return style;
};
