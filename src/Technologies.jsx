import { useRef, useState } from 'react';
import React from 'react';
import ReactPng from './assets/React.png';
import Angular from './assets/Angular.png';
import Asp from './assets/Asp.png';
import Cplus from './assets/C.png';
import Expressjs from './assets/Expressjs.png';
import MongoDB from './assets/MongoDB.png';
import Java from './assets/Java.png';
import MySql from './assets/MySql.png';
import Nodejs from './assets/Nodejs.png';
import PostgreSql from './assets/PostgreSql.png';
import Pythonpy from './assets/python.png';
import Vue from './assets/Vue.png';

const Technologies = () => {
  const containerRef = useRef(null);
  const [images] = useState([
    ReactPng,
    Angular,
    Asp,
    Cplus,
    Expressjs,
    MongoDB,
    Java,
    MySql,
    Nodejs,
    PostgreSql,
    Pythonpy,
    Vue
  ]);

  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <div style={{ 
      width: '90%',
      overflow: 'hidden',
      position: 'relative',
      height: '70px',
      whiteSpace: 'nowrap', // Add this
      borderRadius:'10px',
      padding:'13px',
      '::before': {
        content: '""',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '60px',
        height: '100%',
        background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      },
      '::after': {
        content: '""',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '60px',
        height: '100%',
        background: 'linear-gradient(to left, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        zIndex: 2,
        pointerEvents: 'none'
      }
    }}>
      <div
        ref={containerRef}
        style={{
          display: 'inline-block',
          animation: 'scroll 30s linear infinite',
          whiteSpace: 'nowrap',
          willChange: 'transform'
        }}
      >
        {/* Render duplicated images */}
        {[...images, ...images].map((src, index) => (
          <img 
            key={index}
            src={src}
            style={{
              width: '40px',
              margin: '0 35px',
              display: 'inline-block',
              verticalAlign: 'middle',
              opacity: 0.8,
              transition: 'all 0.3s ease'
            }}
            alt={`tech-${index}`}
          />
        ))}
      </div>
      
      {/* Add CSS animation in JSX */}
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        /* Enhance the fade effect */
        div[style*="position: relative;"] {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 60px,
            black calc(100% - 60px),
            transparent 100%
          );
        }
      `}</style>
    </div>
    </div>
    </>
  );
};

export default Technologies;