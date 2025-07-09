import { React, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from './assets/about4-5f1757d33ddea5ac950ca793df38ddf2.png';
import Plus from './assets/plus.png'
import headingBackground from './assets/heading background.png';
import IconBackground from './assets/icon background.png'
import dollar from './assets/dollar.png'
import greenCheckMark from './assets/greencheckmark.png'
import InnovationBulb from './assets/innovationbulb.png'
import raiseGreen from './assets/raisegreen.png'
import uprightarrow from './assets/up-right-arrow.png'
import Goals from './assets/goals.png'
import Target from './assets/target.png'
import styles from './AboutUs.module.css'
import Footer from './Footer'
import Triangle from './assets/triangle.svg'
import round from './assets/round.svg'
import redround from './assets/rounded red icon.png'
import plus from './assets/plus.png'
import { Link } from 'react-router-dom';

function AboutUs() {

    useEffect(() => {
        if (!sessionStorage.getItem("sessionId")) {
            sessionStorage.setItem("sessionId", crypto.randomUUID());
            sessionStorage.setItem("sessionStart", Date.now().toString());
          }
        sessionStorage.setItem('About_enter', Date.now());
      }, []);

  return (
    <>
      <Helmet>
        <title>VS-About</title>
        <meta name="description" content="Discover VS Solutions, an IT company focused on transforming businesses with top-tier software development services, Visual Studio integrations, and custom IT solutions." />
      </Helmet>

          <img className={styles.floatingImageTriangle} src={Triangle} alt="loading" />
          <img className={styles.floatingImageTriangletwo} src={Triangle} alt="loading" />
          <img className={styles.round} src={round} alt="loading" />
          <img className={styles.round2} src={round} alt="loading" />
          <img className={styles.redround} src={redround} alt="loading" />
          <img className={styles.redround2} src={redround} alt="loading" />
          <img className={styles.plus} src={plus} alt="loading" />
          <img className={styles.plus2} src={plus} alt="loading" />
          

      <div class={styles.body}>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSize: '28px', color: 'rgb(56, 55, 55)',}}>
              <div style={{marginTop: '30px', color: 'rgb(72, 71, 71)'}}>About Us</div>
          </div>

          <div className={styles.MainDiv} style={{ padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', columnGap: '50px' }}>
              <div>
                  <img className={styles.AboutBanner} src={AboutBanner} alt="about" style={{cursor: 'none', pointerEvents:' none'}}/>
              </div>
              <div>
                  <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", width: '70%' }}>
                      <button  style={{ border: 'none', backgroundColor: 'rgb(220, 255, 209)', color: 'rgb(80, 233, 75)', padding: '5px', paddingInline: '20px', borderRadius: '15px' }}>About Us</button>
                      <h2>Engaging New Audiences Through Smart Approach</h2>
                      <p style={{color:' rgb(111, 157, 242)'}}>At VS-Solution, we’re not just a startup; we’re your partner in crafting unique, cutting-edge Web Applications that propel businesses to new heights in the digital world. Our passionate team thrives on creativity and technology, turning your ideas into stunning realities that not only meet your needs but exceed your expectations.</p>
                  </div>
              </div>
          </div>

          <div className={styles.secondaryDiv} style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2%', columnGap: '40px' }}>
              <div class={styles.OurHistory} style={{ color: 'rgb(39, 37, 37)', borderTop: 'solid rgb(255, 126, 126) 1px', borderLeft: 'solid rgb(255, 126, 126) 1px', borderRadius: '5px', padding: '15px' }}>
                  <p style={{fontSize: '22px', fontWeight: '400'}}>Our History</p>
                  <p style={{color: 'rgb(111, 157, 242)'}}>"Born from the shared vision of two developers, VS Apps was founded on the belief that technology should empower businesses. We combine innovative thinking with a deep understanding of user needs to create solutions that help businesses thrive.</p>
                  <div>
                      <Link to={'/SiteUnderConstruction'} class={styles.OurHistoryButton} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', columnGap: '10px', textDecoration:'none' }}>
                          <img src={Plus} alt="loading" width="20px"/>Learn more
                      </Link>
                  </div>
              </div>
              <div class={styles.OurMission} style={{ color: 'rgb(39, 37, 37)', borderTop: 'solid rgb(172, 255, 120) 1px', borderLeft: 'solid rgb(172, 255, 120) 1px', borderRadius: '5px', padding: '15px' }}>
                  <p style={{ fontSize: '22px', fontWeight: '400' }}>Our Mission</p>
                  <p style={{ color: 'rgb(111, 157, 242)' }}>"At VS Apps, our mission is to empower businesses through innovative web applications. We prioritize user success by delivering solutions that are not only functional and user-friendly but also drive measurable results."</p>
                  <div>
                      <Link to={'/SiteUnderConstruction'} class={styles.OurMissionButton} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', columnGap: '10px', textDecoration:'none' }}>
                          <img src={Plus} alt="loading" width="20px"/>Learn more
                      </Link>
                  </div>
              </div>
              <div class={styles.WhoWeAre} style={{ color: 'rgb(39, 37, 37)', borderTop: 'solid rgb(123, 220, 255) 1px', borderLeft: 'solid rgb(123, 220, 255) 1px', borderRadius: '5px', padding: '15px' }}>
                  <p style={{ fontSize: '22px', fontWeight: '400' }}>Who We Are</p>
                  <p style={{ color: 'rgb(111, 157, 242)' }}>"We are a team of passionate developers dedicated to building innovative and user-friendly web applications. We understand that budget constraints are a reality for many businesses, which is why we strive to deliver exceptional value for your investment."</p>
                  <div>
                      <Link to={'/SiteUnderConstruction'} class={styles.WhoWeAreButton} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', alignItems: 'center', columnGap: '10px', textDecoration:'none'}}>
                          <img src={Plus} alt="loading" width="20px"/>Learn more
                      </Link>
                  </div>
              </div>
          </div>

          <div style={{ backgroundColor: 'rgb(255, 254, 248)', marginBottom:'40px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%' }}>
                  <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '38px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', width: '300px', height: '250px', backgroundImage: `url(${headingBackground})`, backgroundSize: 'contain', backgroundPosition: 'center', opacity: 1 }}>
                      <p style={{ color: 'rgb(59, 57, 57)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0', textShadow: '1px 1px 3px rgba(0,0,0,0.7)', marginTop: '-20px', marginLeft: '10px' }}>Why Ch<span style={{color: 'aliceblue'}}>oo</span>se <span style={{color: 'rgb(56, 64, 230)', fontWeight:'600'}}>Us?</span></p>
                  </div>
              </div>

              <div className={styles.WhyChooseUS} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', columnGap:'20px' }}>
                  <div class={styles.wcone} style={{ width:'auto', border: 'solid rgb(213, 210, 210) 1px', borderRadius: '10px', backgroundColor: 'white', padding: '30px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div style={{ position: 'relative', width: '150px', height: '150px', backgroundImage: `url(${IconBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                              <img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0', cursor: 'none', pointerEvents: 'none' }} src={greenCheckMark} alt="loading" width="90px"/>
                          </div>
                          <div>
                              <img src={uprightarrow} alt="loading" width="30px" style={{ cursor: 'none', pointerEvents: 'none' }}/>
                          </div>
                      </div>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '25px' }}>Tailored Solutions</p>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px' }}>We understand that every business is unique. That’s why we offer personalized web solutions designed specifically for your brand, ensuring that you stand out in a crowded market.</p>
                  </div>

                  <div class={styles.wctwo} style={{ width:'auto', border: 'solid rgb(213, 210, 210) 1px', borderRadius: '10px', backgroundColor: 'white', padding: '30px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div style={{ position: 'relative', width: '150px', height: '150px', backgroundImage: `url(${IconBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                              <img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0', cursor: 'none', pointerEvents: 'none' }} src={InnovationBulb} alt="loading" width="100px"/>
                          </div>
                          <div>
                              <img src={uprightarrow} alt="loading" width="30px" style={{ cursor: 'none', pointerEvents: 'none' }}/>
                          </div>
                      </div>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '25px' }}>Innovative Technologies</p>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px' }}>Our team is dedicated to harnessing the latest technologies to create seamless, engaging user experiences. We stay ahead of the curve so your business can too.</p>
                  </div>
              </div>

              <div className={styles.WhyChooseUS} style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop:'20px', paddingBottom:'17px', columnGap:'20px'}}>
                  <div class={styles.wcthree} style={{ width:'auto', border: 'solid rgb(213, 210, 210) 1px', borderRadius: '10px', backgroundColor: 'white', padding: '30px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div style={{ position: 'relative', width: '150px', height: '150px', backgroundImage: `url(${IconBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                              <img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0', cursor: 'none', pointerEvents: 'none', width:'100px' }} src={dollar} alt="loading" />
                          </div>
                          <div>
                              <img src={uprightarrow} alt="loading" width="30px" style={{ cursor: 'none', pointerEvents: 'none' }}/>
                          </div>
                      </div>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '25px' }}>Budget Friendly</p>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px' }}>Looking for high-quality services that won’t break the bank? We specialize in delivering exceptional results without the hefty price tag. From web and mobile application development to digital marketing, we bring innovation, quality, and affordability together. Let’s make your vision a reality, all within your budget.</p>
                  </div>

                  <div class={styles.wcfour} style={{ width:'auto', border: 'solid rgb(213, 210, 210) 1px', borderRadius: '10px', backgroundColor: 'white', padding: '30px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div style={{ position: 'relative', width: '150px', height: '150px', backgroundImage: `url(${IconBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                              <img style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', margin: '0', cursor: 'none', pointerEvents: 'none' }} src={raiseGreen} alt="loading" width="100px"/>
                          </div>
                          <div>
                              <img src={uprightarrow} alt="loading" width="30px" style={{ cursor: 'none', pointerEvents: 'none' }}/>
                          </div>
                      </div>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '25px' }}>Commitment to Success</p>
                      <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '15px' }}>Your success is our success! We’re here to support you at every step, from conceptualization to launch and beyond, ensuring your online presence is not just functional but thriving.</p>
                  </div>
              </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0.8' }}>
              <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: '500', fontSize: '40px', display: 'flex', flexDirection: 'column', lineHeight: '40px' }}>Our<span style={{ fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif", fontWeight: '300', fontSize: '60px', color: 'rgb(255, 0, 119)', textShadow: 'gray 2px 2px 5px' }}>Mission</span></p>
          </div>

          <div className={styles.Mission} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '3%'}}>
              <div className={styles.Missionp} style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '20px', width:'auto' }}>At <span style={{ fontSize: '1em', fontWeight: 'bold' }}>VS-Solution</span>, our mission is to empower businesses by providing exceptional web solutions that drive growth, enhance visibility, and foster connections. We believe that a strong online presence is essential in today’s digital landscape, and we’re here to help you navigate it with confidence.</div>
              <div className={styles.MissionImg} style={{ backgroundImage: `url(${Goals})`, backgroundPosition: 'center', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}><img className={styles.MissionImg} src={Target} alt="loading" style={{ cursor: 'none', pointerEvents: 'none' }}/></div>
          </div>

      </div>
        <footer>              
            <div>
              <Footer/>
            </div>
        </footer>
    </>
  )
}

export default AboutUs
