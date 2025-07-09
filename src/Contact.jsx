import React, { useEffect, useState } from 'react'
import add from './assets/add.gif';
import emailContact from './assets/email conatct.gif';
import call from './assets/call.gif';
import contactImg from './assets/contact-img.png';
import style from './Contact.module.css'
import Footer from './Footer'
import Triangle from './assets/triangle.svg'
import round from './assets/round.svg'
import redround from './assets/rounded red icon.png'
import plus from './assets/plus.png'
import { Link } from 'react-router-dom';

function Contact() {

  useEffect(() => {
    if (!sessionStorage.getItem("sessionId")) {
      sessionStorage.setItem("sessionId", crypto.randomUUID());
      sessionStorage.setItem("sessionStart", Date.now().toString());
    }
    sessionStorage.setItem('Contact_enter', Date.now());
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    subject: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form (check if all fields are filled)
  const isFormValid = Object.values(formData).every((val) => val.trim() !== "");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return; // Prevent submission if fields are empty

    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3001/api/forminfo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Message sent successfully!");
        setFormData({ name: "", email: "", tel: "", subject: "", description: "" });
      } else {
        setMessage("Failed to send message. Try again.");
      }
    } catch (error) {
      setMessage("Error sending message. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <img className={style.floatingImageTriangle} src={Triangle} alt="loading" />
    <img className={style.floatingImageTriangletwo} src={Triangle} alt="loading" />
    <img className={style.round} src={round} alt="loading" />
    <img className={style.round2} src={round} alt="loading" />
    <img className={style.redround} src={redround} alt="loading" />
    <img className={style.plus} src={plus} alt="loading" />


    <div className={style.body}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop:'20px' }}>
        <h1 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif'", fontWeight: 700, fontSize: '25px' }}>Contact Us</h1>
    </div>

    <div className={style.ccIn}  style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '5%', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
        <div style={{ width: '250px', height: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={emailContact} alt="Profile Icon" style={{ display: 'block', margin: '0 auto', borderRadius: '50%', width: '70px', cursor: 'none', pointerEvents: 'none' }} />
        <h2 style={{ margin: '10px 0', fontSize: '18px', color: '#333', fontWeight: 500 }}>Mail Here</h2>
        <Link to={'/SiteUnderConstruction'} className={style.Button} style={{ color: 'rgb(111, 157, 242)', cursor: 'pointer', textDecoration:'none' }}>Click here to Mail</Link>
        </div>
        
        <div style={{ width: '250px', height: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={call} alt="Profile Icon" style={{ display: 'block', margin: '0 auto', borderRadius: '50%', width: '70px', cursor: 'none', pointerEvents: 'none' }} />
        <h2 style={{ margin: '10px 0', fontSize: '18px', color: '#333', fontWeight: 500 }}>Call Here</h2>
        <Link to={'/SiteUnderConstruction'} className={style.Button} style={{ color: 'rgb(111, 157, 242)', cursor: 'pointer', textDecoration:'none' }}>Click Here to Call</Link>
        </div>

        <div style={{ width: '250px', height: 'auto', padding: '20px', border: '1px solid #ddd', borderRadius: '10px', boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <img src={add} alt="Profile Icon" style={{ display: 'block', margin: '0 auto', borderRadius: '50%', width: '70px', cursor: 'none', pointerEvents: 'none' }} />
        <h2 style={{ margin: '10px 0', fontSize: '18px', color: '#333', fontWeight: 500 }}>Get In Touch</h2>
        <a style={{textDecoration:'none'}}href="#toForm"> <span className={style.Button} style={{ color: 'rgb(111, 157, 242)', cursor: 'pointer', textDecoration:'none' }}>Send Message to us</span></a>
        </div>
    </div>

    <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ color: 'rgb(47, 50, 72)', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontWeight: 700, fontSize: '25px' }}>Get In Touch With Us</h1>
        </div>
        <div className={style.cp} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontSize: '20px', color: '#787777' }}>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>
    </div>

    <div id='toForm' className={style.getInTouch} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '30px', columnGap: '20px' }}>
        <div>
            <img className={style.getInImg} src={contactImg} alt="loading" style={{ cursor: 'none', pointerEvents: 'none' }} />
        </div>
          <form onSubmit={handleSubmit}>
            <div className={style.getInForm} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', rowGap: '20px' }}>
                <input type="text" name="name" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', outline: 'none' }} onFocus={e => e.target.style.outline = '1px solid #90ee90'} onBlur={e => e.target.style.outline = 'none'} />
                <input type="email" name="email" id="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', outline: 'none' }} onFocus={e => e.target.style.outline = '1px solid #90ee90'} onBlur={e => e.target.style.outline = 'none'} />
                <div>
                    <input type="tel" name="tel" id="tel" placeholder="Your phone number" value={formData.tel} onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', outline: 'none' }} onFocus={e => e.target.style.outline = '1px solid #90ee90'} onBlur={e => e.target.style.outline = 'none'} />
                    <input className={style.getInSubject} type="text" name="subject" id="subject" placeholder="Your Subject" value={formData.subject}  onChange={handleChange} required style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', outline: 'none' }} onFocus={e => e.target.style.outline = '1px solid #90ee90'} onBlur={e => e.target.style.outline = 'none'} />
                </div>
                <textarea id="description" name="description" placeholder="Write your Message..." value={formData.description} onChange={handleChange} required style={{ width: '100%', height: '120px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', fontSize: '1em', fontFamily: 'Arial, sans-serif', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', resize: 'none', outline: 'none' }} onFocus={e => e.target.style.outline = '1px solid #90ee90'} onBlur={e => e.target.style.outline = 'none'} />
                <button type="submit"  disabled={!isFormValid || isSubmitting} style={{ marginTop: '10px', padding: '10px 20px', border: 'none', borderRadius: '5px', backgroundColor:  !isFormValid ? '#9ca3af' : '#2563eb', cursor: !isFormValid ? 'not-allowed' : 'pointer', color: '#fff', fontSize: '1em'}}>{isSubmitting ? "Sending..." : "Send Message"}</button>
            </div>
          </form>
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

export default Contact