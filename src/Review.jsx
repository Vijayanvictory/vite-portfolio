import React, { useState, useEffect } from "react";
import Profilepic from './assets/pia19048.jpg';
import FastForward from './assets/fast-forward.gif';

const reviews = [
  {
    id: 1,
    name: "Smith",
    role: "Deep Technical SEO",
    text: "organic traffic increased by 120%",
    img: Profilepic
  },
  {
    id: 2,
    name: "Sarah",
    role: "Digital Marketer",
    text: "Excellent service and support! Their team helped us increase conversions by 150% in just 3 months. Highly recommended for anyone looking to grow their business.",
    img: Profilepic
  },
  {
    id: 3,
    name: "John",
    role: "E-commerce Specialist",
    text: "The results we've seen since working with them have been phenomenal. Our online sales have tripled and customer engagement is at an all-time high.",
    img: Profilepic
  }
];

export default function ReviewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5%',
      backgroundColor: 'rgba(186, 231, 234, 0.46)'
  }}>
      <div>
          <h1 style={{
              color: 'rgb(47, 50, 72)',
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontWeight: 600,
              fontSize: '30px'
          }}>
              What users Saying
          </h1>
      </div>

      <p style={{
          color: 'rgb(111, 157, 242)',
          textAlign: 'center',
          marginBottom: '40px'
      }}>
          Discover what our clients say about our services and their experiences working with our team.
      </p>

      <div style={{
          backgroundColor: 'rgb(255, 255, 255)',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px',
          borderRadius: '4px',
          marginTop: '25px',
          position: 'relative',
          minHeight: '300px'
      }}>
          <button
              onClick={prevReview}
              style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
              }}
          >
              <img
                  src={FastForward}
                  alt="Previous"
                  style={{
                      width: '40px',
                      transform: 'rotate(180deg)',
                      transition: 'transform 0.3s ease'
                  }}
              />
          </button>

          <div style={{
              flexGrow: 1,
              margin: '20px 0',
              transition: 'opacity 0.5s ease',
              width:'100%',
              opacity: 1,
          }}>
              <div style={{
                  display: 'flex',
                  flexDirection:'column',
                  alignItems: 'center',
                  gap: '20px',
                  width:'100%',
                  padding:'10px'
              }}>
                  <img
                      src={reviews[currentIndex].img}
                      alt="Profile"
                      style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          border: '2px solid #34db4d',
                          borderRadius: '50%',
                          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                      }}
                  />
                  <div>
                      <h2 style={{
                          color: 'rgb(47, 50, 72)',
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                          fontWeight: 500,
                          fontSize: '20px',
                          marginBottom: '8px'
                      }}>
                          {reviews[currentIndex].name}
                      </h2>
                      <p style={{
                          color: 'rgb(243, 117, 255)',
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                          fontWeight: 500,
                          marginBottom: '15px'
                      }}>
                          {reviews[currentIndex].role}
                      </p>
                      <p style={{
                          color: 'rgb(111, 157, 242)',
                          lineHeight: '1.6',
                          maxWidth: '600px',
                      }}>
                          {reviews[currentIndex].text}
                      </p>
                  </div>
              </div>
          </div>

          <button
              onClick={nextReview}
              style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '10px',
                    '@media (max-width: 768px)': {
                      position: 'absolute',
                      top: '15px',
                      right: '10px'
                  }
              }}
          >
              <img
                  src={FastForward}
                  alt="Next"
                  style={{
                      width: '40px',
                      transition: 'transform 0.3s ease',
                       ':hover': {
                          transform: 'scale(1.1)'
                      }
                  }}
              />
          </button>
      </div>

      <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '20px'
      }}>
          {reviews.map((_, index) => (
              <div
                  key={index}
                  style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: index === currentIndex ? 'rgb(111, 157, 242)' : '#ddd',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease'
                  }}
                  onClick={() => setCurrentIndex(index)}
              />
          ))}
      </div>
  </div>
  );
}