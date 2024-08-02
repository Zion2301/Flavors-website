import './Contact.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <>
       <div className="contactbox">
           <p className='copyright'>Copyright &copy; 2024 flavors Inc</p>

           <div className="address">
            <p className="tinyhead">Address</p>
            <p>123 Elm Field</p>
            <p>Springfield</p>
            <p>SP 12345, United Kingdom</p>
           </div>

           <div className="address">
            <p className="tinyhead">Contact</p>
            <p>Spice Restaurant</p>
            <p>flavor@gmail.com</p>
            <p>(+234) 814 234 7750</p>
           </div>

           <div className="address">
            <p className="tinyhead">Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Accessibility Statement</p>
           </div>

           

           <div className="socials">
                <FaFacebook className='social'/>
               <FaInstagram className='social'/>
                <FaLinkedin className='social'/>
           </div>
       </div>
    </>
  )
}

export default Contact