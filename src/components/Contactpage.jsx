import logo from '../assets/logo.png' 
import './Contactpage.css'
import { Link } from 'react-router-dom'
import location from '../assets/location.jpg'
const Contactpage = () => {
  return (
   <>
     <div className="maincontactbox">
        <h1 className="about">Contact Us</h1>
        <div className="topcontactside">
            <div className="leftdescribe">
                <img src={logo} alt="" className='logo'/>
                <div className="addresspart">
                    <p className='thehead'>Address</p>
                    <p>123 Elm field, Springfield,</p>
                     <p>SP 12345, United Kingdom.</p>
                </div>

                <div className="hourssection">
                    <p className="thehead">Our Times</p>
                    <div className="eachhour">
                        <p>Sun:</p>
                        <p>Closed</p>
                    </div>

                    <div className="eachhour">
                        <p>Mon:</p>
                        <p>12:00pm - 9:00pm</p>
                    </div>

                    <div className="eachhour">
                        <p>Tue:</p>
                        <p>Closed</p>
                    </div>

                    <div className="eachhour">
                        <p>Wed:</p>
                        <p>12:00pm - 9:00pm</p>
                    </div>

                    <div className="eachhour">
                        <p>Thu:</p>
                        <p>12:00pm - 9:00pm</p>
                    </div>

                    <div className="eachhour">
                        <p>Fri:</p>
                        <p>12:00pm - 9:00pm</p>
                    </div>

                    <div className="eachhour">
                        <p>Sat:</p>
                        <p>Closed</p>
                    </div>
                </div>

                <div className="contactpart">
                    <p className='thehead'>Contact</p>
                     <div className="phone">
                        <p>Phone: </p>
                        <p>(+123) 814 234 7750</p>
                     </div>
                     <div className="phone">
                        <p>Email: </p>
                        <p>flavors@gmail.com</p>
                     </div>
                </div>

               <Link to="/" className='proceed'>Proceed to Order</Link>
            </div>
              
            <img src={location} alt="" className='location'/>
        </div>
     </div>
   </>
  )
}

export default Contactpage