import { useState, useEffect } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();

    let timeout: ReturnType<typeof setTimeout>;
    const debouncedCheck = () => {
      clearTimeout(timeout);
      timeout = setTimeout(check, 150);
    };

    window.addEventListener("resize", debouncedCheck);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [breakpoint]);

  return isMobile;
};
