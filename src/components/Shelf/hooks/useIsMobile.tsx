import { useState, useEffect } from 'react';

const getIsMobile = () => window.innerWidth < 767;
const getIsTablet = () => window.innerWidth > 767 && window.innerWidth < 1023;
const getIsDesktop = () => window.innerWidth > 1023;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const [isTablet, setIsTablet] = useState(getIsTablet());
  const [isDesktop, setIsDesktop] = useState(getIsDesktop());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
      setIsTablet(getIsTablet());
      setIsDesktop(getIsDesktop());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { isMobile, isDesktop, isTablet };
}
