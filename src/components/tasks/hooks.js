import { useState, useEffect } from "react";

export const useContainerQuery = (ref) => {
  const [match, setMatch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMatch(ref.current.clientWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return match;
};
