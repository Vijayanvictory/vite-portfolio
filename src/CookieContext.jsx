import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

// Create the CookieContext
export const CookieContext = createContext();

export const CookieProvider = ({ children }) => { // Ensure it's a named export
  const [showBanner, setShowBanner] = useState(true);
  const [scrollDepth, setScrollDepth] = useState(0);
  const cookies = new Cookies();

  useEffect(() => {
    const consent = cookies.get('cookieConsent');
    const savedScrollDepth = cookies.get('scrollDepth');

    if (consent) {
      setShowBanner(false);
      if (savedScrollDepth) {
        setScrollDepth(savedScrollDepth);
      }
    }
  }, []);

  const handleAccept = () => {
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
    cookies.set('cookieConsent', true, { path: '/', expires: oneYearFromNow });
    setShowBanner(false);
  };

  const handleDecline = () => {
    cookies.set('cookieConsent', false, { path: '/' });
    setShowBanner(false);
  };

  const handleScroll = () => {
    const { scrollTop } = document.documentElement;
    cookies.set('scrollDepth', scrollTop, { path: '/' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CookieContext.Provider
      value={{ showBanner, handleAccept, handleDecline, scrollDepth }}
    >
      {children}
    </CookieContext.Provider>
  );
};
