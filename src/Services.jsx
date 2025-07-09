import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import style from './Services.module.css'
import plus from './assets/plus.png';
import webDevelopmentImg from './assets/webdevelopmentimg.jpeg';
import mobileAppDevelopmentImg from './assets/Mobile-App-Development.jpeg';
import customSoftwareDevelopmentImg from './assets/custom-software-development.jpg';
import apiIntegrationImg from './assets/api-integration.jpg';
import uiux from './assets/latest-ui-ux-design.jpg'
import ecommerce from './assets/ecommerce-1.jpg'
import elearning from './assets/eLearning-visual.png'
import adsence from './assets/google-adsense-logo-0.png'
import Footer from './Footer.jsx'
import { Link } from 'react-router-dom';

function Services () {

    useEffect(() => {
        if (!sessionStorage.getItem("sessionId")) {
            sessionStorage.setItem("sessionId", crypto.randomUUID());
            sessionStorage.setItem("sessionStart", Date.now().toString());
          }
        sessionStorage.setItem('Service_enter', Date.now());
      }, []);


    const cardStyle = {
        width: '100%', maxWidth: '400px', borderRadius: '10px', backgroundColor: 'white', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', display: 'flex', flexDirection: 'column', gap: '15px', position: 'relative'
      };
      const imageStyle = {
        width: '100%', height: '200px', borderRadius: '8px', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat:'no-repeat'
      };
      const titleStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '20px', fontWeight: 600, color: '#2F3248', margin: 0
      };
      const textStyle = {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px', color: '#555', lineHeight: 1.5
      };
      const learnMoreStyle = {
        position: 'absolute', bottom: '10px', right: '20px',  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '14px', fontWeight: 500, color: '#007BFF', display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer'
      };
    
      
    return (
        <>
        <Helmet>
            <title>VS-Services</title>
            <meta name="description" content="Discover VS Solutions, an IT company focused on transforming businesses with top-tier software development services, Visual Studio integrations, and custom IT solutions." />
        </Helmet>


        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.8 }}>
        <p
            style={{
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: 500,
            fontSize: '30px',
            display: 'flex',
            flexDirection: 'column',
            lineHeight: '33px',
            marginTop:'10px'
            }}
        >
            Our
            <span
            style={{
                fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                fontWeight: 300,
                fontSize: '40px',
                color: 'rgb(0, 42, 255)',
                textShadow: '#D3D3D3 2px 2px 5px',
            }}
            >
            Services
            </span>
        </p>
        </div>

        <div className={style.body} style={{ padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '30px', rowGap:'30px',flexWrap:'wrap' }}>
            {[{
                img: webDevelopmentImg, title: 'Web Development',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            }, {
                img: mobileAppDevelopmentImg, title: 'Mobile App Development',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            }, {
                img: customSoftwareDevelopmentImg, title: 'Custom Software Solutions',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            }, {
                img: apiIntegrationImg, title: 'API Integration and Development',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving. '
            },{
                img: uiux, title: 'UI/UX Design',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            },{
                img: ecommerce, title: 'E-Commerce Solutions',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            },{
                img: elearning, title: 'E-Learning Platforms',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            },{
                img: adsence, title: 'Blog with Adsence',
                text: 'Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.'
            }].map((service, index) => (
                <div
                key={index}
                style={cardStyle}
                onMouseOver={(e) => e.currentTarget.style.border = '1px solid #D3D3D3'}
                onMouseOut={(e) => e.currentTarget.style.border = 'none'}
                >
                <div style={{ ...imageStyle, backgroundImage: `url(${service.img})` }}></div>
                <h3 style={titleStyle}>{service.title}</h3>
                <p style={textStyle}>{service.text}</p>
                <Link to={'/SiteUnderConstruction'} className={style.Button} style={learnMoreStyle}>
                    <img src={plus} alt="loading" style={{ width: '20px', pointerEvents: 'none' }} />
                    Learn more
                </Link>
                </div>
            ))}
            </div>

            <footer>              
                <div>
                    <Footer/>
                </div>
            </footer>
        </>
    );
};

export default Services;
