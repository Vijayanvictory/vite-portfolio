import React, { useState } from 'react'
import styles from './Nav.module.css'
import { Link } from "react-router-dom";
import logo from './assets/vite.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
return (
  <header className={styles.stickybar}>
    <nav className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <div className={styles.logo}><img style={{width:'70px'}} src={logo} alt="loading" /></div>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
          <li><Link to={'/'} className={styles.link}>Home</Link></li>
          <li><Link to={'/Services'} className={styles.link}>Services</Link></li>
          <li><Link to={'/About'} className={styles.link}>About</Link></li>
          <li><Link to={'/contact'} className={styles.link}>Contact</Link></li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Mobile Sidebar */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileNavHeader}>
            <button 
              className={styles.closeBtn}
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>
          <ul>
            <li><Link to={'/'} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to={'/Services'} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
            <li><Link to={'/About'} onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to={'/contact'} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>

        {/* Overlay when sidebar is open */}
        {isMenuOpen && (
          <div 
            className={styles.overlay}
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </div>
    </nav>
  </header>
);
};
    
export default Nav