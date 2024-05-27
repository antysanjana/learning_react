import { useEffect, useState } from "react";

const useWindowWidth = (screensize) => {
  const [onSmallScreen, setOnSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setOnSmallScreen(window.innerWidth < screensize);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screensize]);

  return onSmallScreen;
};

export default useWindowWidth;
