import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // Immediately reset scroll without animation or delay
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
