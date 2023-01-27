import { useEffect } from "react";
export const useScrollTo = (x, y) => {
  useEffect(() => {
    window.scrollTo(x, y);
  });
};
