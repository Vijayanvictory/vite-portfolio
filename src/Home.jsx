
import React, { useEffect } from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import styles from './Home.module.css'
import webpng from './assets/web.png'
import servicetoolgif from './assets/service-tools.gif'
import responsivegif from './assets//responsive copy.gif'
import mentoringgif from './assets//mentoring.gif'
import passwordgif from './assets/password.gif'
import developmentbanner from './assets/Fronseye-Best-web-development-in-Chennai.gif'
import devresdesign from './assets//responsive-design.gif'
import androidgif from './assets/android.gif'
import applepng from './assets/apple.png'
import shoppingcartgif from './assets/shopping-cart.gif'
import codinggif from './assets/coding.gif'
import htmlgif from './assets/html.gif'
import uiux from './assets//reorder.gif'
import printreadydesign from './assets/programmer.gif'
import dotnetweb from './assets/programming.gif'
import webapp from './assets/ux-design.gif'
import settings from './assets/settings.gif'
import analysis from './assets/analysis.gif'
import modelling from './assets/modelling.gif'
import dashboard from './assets/dashboard.gif'
import emails from './assets/email.gif'
import cyberterrorism from './assets/cyberterrorism.gif'
import bell from './assets/bell.gif'
import seo from './assets/seo.gif'
import { Link } from "react-router-dom";
import Review from './Review'
import Technologies from "./Technologies";

function Home () {

  useEffect(() => {
    // Check if sessionId exists, otherwise create a new one
    if (!sessionStorage.getItem("sessionId")) {
      sessionStorage.setItem("sessionId", crypto.randomUUID());
      sessionStorage.setItem("sessionStart", Date.now().toString());
    }

    // Set page enter time when the component mounts
    sessionStorage.setItem("Home_enter", Date.now().toString());
  }, []);


  return (
    
    <>

    <Helmet>
      <title>abc-Solution</title>
      <meta name="description" content="Discover abc-Solution, an IT company focused on transforming businesses with top-tier software development services, Visual Studio integrations, and custom IT solutions." />
    </Helmet>

    <div style={{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}}>

        {/* Main content */}

        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h1 className={styles.heading}>
                Secure IT Solutions For a More Secure Environment
              </h1>
              <p className={styles.description}>
                We deliver cutting-edge solutions to safeguard your data, streamline your operations, 
                and build a secure foundation for your business growth. From advanced threat protection 
                to reliable IT services, we ensure your digital environment is resilient, efficient, 
                and future-ready.
              </p>
              <Link to={'/Contact'} className={styles.buttonone}>
                GET STARTED
              </Link>
            </div>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={webpng} alt="IT solutions" />
            </div>
          </div>
        </div>


          {/* card */}

          <div className={styles.card} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '5%', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
            <div style={{backgroundColor: 'white', width: '90%',  maxWidth: '250px',  height: 'auto', padding: 'clamp(15px, 5%, 20px)',  border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '0 auto'}}>
              <img src={servicetoolgif} alt="Profile Icon" style={{  display: 'block', margin: '0 auto', borderRadius: '50%', width: 'clamp(60px, 17vw, 70px)', height: 'auto',cursor: 'none', pointerEvents: 'none'}} />
                <h2 style={{ margin: 'clamp(8px, 2vw, 10px) 0', fontSize: 'clamp(16px, 4vw, 18px)', color: '#333', fontWeight: '500', lineHeight: '1.3' }}>Zero Configuration</h2>
              <p style={{  color: 'rgb(111, 157, 242)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.5', margin: '0 auto', maxWidth: '90%' }}>Effortless setup, instant results—Zero Configuration solutions for a seamless experience.</p>
            </div>
            <div style={{backgroundColor: 'white', width: '90%',  maxWidth: '250px',  height: 'auto', padding: 'clamp(15px, 5%, 20px)',  border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '0 auto' }}>
              <img src={responsivegif} alt="Profile Icon" style={{  display: 'block', margin: '0 auto', borderRadius: '50%', width: 'clamp(60px, 17vw, 70px)', height: 'auto',cursor: 'none', pointerEvents: 'none'}} />
                <h2 style={{ margin: 'clamp(8px, 2vw, 10px) 0', fontSize: 'clamp(16px, 4vw, 18px)', color: '#333', fontWeight: '500', lineHeight: '1.3' }}>Code Security</h2>
              <p style={{  color: 'rgb(111, 157, 242)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.5', margin: '0 auto', maxWidth: '90%' }}>Protect your code, protect your future-uncompromising Code Security for a safer digital world.</p>
            </div>
            <div style={{backgroundColor: 'white', width: '90%',  maxWidth: '250px',  height: 'auto', padding: 'clamp(15px, 5%, 20px)',  border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '0 auto'}}>
              <img src={mentoringgif} alt="Profile Icon" style={{  display: 'block', margin: '0 auto', borderRadius: '50%', width: 'clamp(60px, 17vw, 70px)', height: 'auto',cursor: 'none', pointerEvents: 'none'}} />
                <h2 style={{ margin: 'clamp(8px, 2vw, 10px) 0', fontSize: 'clamp(16px, 4vw, 18px)', color: '#333', fontWeight: '500', lineHeight: '1.3' }}>Team Management</h2>
              <p style={{ color: 'rgb(111, 157, 242)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.5', margin: '0 auto', maxWidth: '90%' }}>Empower collaboration, streamline success—Team Management made smarter and more effective.</p>
            </div>
            <div style={{backgroundColor: 'white', width: '90%',  maxWidth: '250px',  height: 'auto', padding: 'clamp(15px, 5%, 20px)',  border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center', margin: '0 auto'}}>
              <img src={passwordgif} alt="Profile Icon" style={{ display: 'block', margin: '0 auto', borderRadius: '50%', width: 'clamp(60px, 17vw, 70px)', height: 'auto',cursor: 'none', pointerEvents: 'none'}} />
                <h2 style={{ margin: 'clamp(8px, 2vw, 10px) 0', fontSize: 'clamp(16px, 4vw, 18px)', color: '#333', fontWeight: '500', lineHeight: '1.3' }}>Access Controlled</h2>
              <p style={{  color: 'rgb(111, 157, 242)', fontSize: 'clamp(12px, 3vw, 14px)', lineHeight: '1.5', margin: '0 auto', maxWidth: '90%' }}>Secure what matters—Access Controlled solutions for ultimate protection and precision.</p>
            </div>
          </div>

          {/* desing and development  */}
          <div className={styles.designanddevelopment} style={{display:'flex'}}>
            <div>
              <img src={developmentbanner} alt="loading" />
            </div>
          <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
            <div>
                <h1 style={{
                    color: 'rgb(47, 50, 72)',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    letterSpacing: '2px',
                    fontWeight: '500',
                    fontSize: 'clamp(24px, 4vw, 32px)',
                    textAlign: 'start'
                }}>
                    Design & Development
                </h1>
            </div>
            <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
                <p style={{ color: 'rgb(111, 157, 242)', textAlign: 'Start' }}>
                    Imagine a Web Application that not only looks stunning but also functions seamlessly. Our expert team harnesses the latest technologies to create custom Web Applications that stand out in today’s digital landscape.
                </p>
            </div>
            <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
                <p style={{ color: 'rgb(255, 50, 122)', textAlign: 'Start' }}>
                    Transform your vision into reality with our cutting-edge web solutions that captivate and engage. Are you ready to elevate your business?
                </p>
            </div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '20px',
                marginTop: '20px'
            }}>
                {[ 
                    { img: devresdesign, text: 'Responsive Design' },
                    { img: androidgif, text: 'Android Apps Development' },
                    { img: applepng, text: 'iOS Apps Development' },
                    { img: shoppingcartgif, text: 'E-commerce Development' },
                    { img: codinggif, text: 'React Web Development' },
                    { img: htmlgif, text: 'Laravel Web Development' },
                    { img: uiux, text: 'UX/UI Design' },
                    { img: printreadydesign, text: 'Print Ready Design' },
                    { img: dotnetweb, text: '.NET Web Development' },
                    { img: webapp, text: 'Web Application Development' }
                ].map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '10px',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        background: '#fff'
                    }}>
                        <img src={item.img} alt={item.text} style={{ marginRight: '10px', width: '40px' }} />
                        <span style={{ flexGrow: '1', color: 'rgb(111, 157, 242)', fontWeight: '600' }}>{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
          </div>
          </div>
          {/* features */}

         <div style={{ display: "flex", flexDirection: "column", padding: "5%", alignItems: "center", backgroundColor:'rgba(217, 224, 227, 0.78)' }} >
              <div>
                  <h1 style={{ color: "rgb(47, 50, 72)", fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", letterSpacing: "2px", fontWeight: 500 }}>Our Features</h1>
              </div>

              <div style={{ width: "70%", color: "rgb(111, 157, 242)", marginBottom: "10px" }}>
                  <p>Explore our powerful features we provide—designed to enhance performance, streamline processes, and drive success.</p>
              </div>

              <div className={styles.featureBox} style={{display:'flex', columnGap:'20px'}}>

                <div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={settings} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Incredible Infrastructure</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Built for performance and scalability—Incredible Infrastructure that supports your growth and success.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={dashboard} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Simple Dashboard</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Intuitive and user-friendly—A Simple Dashboard that puts control at your fingertips.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={modelling} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Drag & Drop Functionality</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Effortless customization—Drag & Drop Functionality that makes building and managing easy.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={analysis} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Best Analytics Audits</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Data-driven insights—Best Analytics Audits to optimize performance and drive informed decisions.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={emails} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Email Notifications</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Stay informed in real-time—Email Notifications that keep you updated and in control.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={cyberterrorism} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Information Retrieval</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Information Retrieval that ensures you access the data you need, when you need it.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={bell} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Deadline Reminders</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Never miss a deadline—Deadline Reminders to keep you on track and ahead of schedule.</p>
                    </div>
                  </div>
                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', columnGap: '40px', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd' }}>
                    <img src={seo} alt="loading" style={{ width: '60px', cursor: 'none', pointerEvents: 'none' }} />
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>Deep Technical SEO</h2>
                      <p style={{ width: '70%', color: 'rgb(111, 157, 242)' }}>Boost visibility and rankings—Deep Technical SEO that ensures your website performs at its best.</p>
                    </div>
                  </div>
                </div>
              </div>
         </div>

         <Technologies/>


          {/* what user saying */}

          <Review/>

          {/* contact */}

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3%' }}>
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <h1 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '30px',marginBottom:'30px' }}>
                      We Always Try to Understand Users Expectation
                    </h1>
                  </div>
                  <p style={{ color: 'rgb(111, 157, 242)' }}>
                    We are committed to truly understanding your needs and expectations. By listening closely to your goals and challenges, we tailor our solutions to ensure the best possible outcomes. Your satisfaction drives our innovation, and we strive to exceed your expectations every step of the way.
                  </p>

                  <div style={{ boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'rgb(255, 255, 255)', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '10px', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '4px', marginBottom: '10px', border: '1px solid #ddd', marginTop: '20px' }}>
                    <div>
                      <h2 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 500, fontSize: '20px' }}>
                        Have Any Questions About Us?
                      </h2>
                      <p style={{ width: '70%', color: 'rgb(106, 186, 255)' }}>Don't hesitate to contact us</p>
                    </div>
                    <Link to={'/contact'} style={{ border: 'none', backgroundColor: 'rgb(199, 83, 237)', paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px', paddingBottom: '10px', borderRadius: '4px', color: 'white', fontWeight: 500, textDecoration:'none', fontSize:'13px'}}>
                      CONTACT
                    </Link>
                  </div>
                </div>

          <footer>              
            <div>
              <Footer/>
            </div>
          </footer>
    </>
  );
};

export default Home;
