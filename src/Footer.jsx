import React from 'react'
import styles from './Footer.module.css'
import {Link} from 'react-router-dom'
import x from './assets/twitter-x-logo-42554.png'
import Insta from './assets/logo-instagram-2435.png'
import Facebook from './assets/logo-facebook-png-46264.png'
import linkedin from './assets/Logo-LinkedIn-Round.png'

function Footer() {
  return (

        <footer class={styles.footer}>
        <div class={styles.footercontainer}>
            <div class={styles.footercolumn}>
            <h4 class={styles.footercolumntitle}>Contact Information:</h4>
            <p class={styles.footercolumnp}>Email: abcsolutions@gmail.com</p>
            </div>

            <div class={styles.footercolumn}>
            <h4 class={styles.footercolumntitle}>Social Media Links:</h4>
            <div class={styles.socialicons}>
                <a aria-label="X"><img style={{width:'30px'}} src={x}/></a>
                <a aria-label="Facebook"><img style={{width:'30px'}} src={Facebook}/></a>
                <a aria-label="Instagram"><img style={{width:'30px'}} src={Insta}/></a>
                <a aria-label="LinkedIn"><img style={{width:'30px'}} src={linkedin}/></a>
            </div>
            </div>

            <div class={styles.footercolumn}>
            <h4 class={styles.footercolumntitle}>Quick Links:</h4>
            <Link to='/' class={styles.footercolumna} style={{margin:"5px"}}>Home</Link>
            <Link to='/About' class={styles.footercolumna} style={{margin:"5px"}}>About</Link>
            <Link to='/Services' class={styles.footercolumna} style={{margin:"5px"}}>Services</Link>
            <Link to='/contact' class={styles.footercolumna} style={{margin:"5px"}}>Contact</Link>
            </div>
        </div>

        <div class={styles.footerbottom}>
            <p>© 2024 abc-solution. All Rights Reserved.</p>
        </div>
        </footer>
  )
}

export default Footer