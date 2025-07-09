
import React, { useContext, useEffect } from 'react';
import { CookieContext } from './CookieContext';
import styles from './cookie.module.css'

const CookieConsentBanner = () => {
  const { showBanner, handleAccept, handleDecline, scrollDepth } =
    useContext(CookieContext);

  useEffect(() => {
    if (scrollDepth) {
      window.scrollTo(0, scrollDepth);
    }
  }, [scrollDepth]);

  if (!showBanner) {
    return null;
  }

  return (
    <div className={styles.cookieconsent} aria-live="polite" aria-atomic="true">
      <p>
        This website uses cookies to enhance your browsing experience and
        remember your last scroll position. Please choose your preference.
      </p>
      <button className={styles.acceptbutton} onClick={handleAccept}>Accept</button>
      <button className={styles.declinebutton} onClick={handleDecline}>Decline</button>
    </div>
  );
};

export default CookieConsentBanner;
