import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

export default ScrollToTop;
