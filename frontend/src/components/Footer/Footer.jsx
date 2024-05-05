import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nemo minus rerum quo impedit magnam beatae corrupti, facere tempora exercitationem unde iure excepturi ad? Perferendis voluptatibus corporis vero id maxime?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>

            </div>

            <div className="footer-content-center">
                <h2>INNOVX</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 9876543211</li>
                    <li>Contact@Pizzahat.in</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className='footer-copyright'>Copyright @ 2024</p>
    </div>
  )
}

export default Footer
