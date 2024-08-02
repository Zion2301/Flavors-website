import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { IoPersonOutline } from "react-icons/io5";
import logo from '../assets/logo.png'
import { IoMenu } from "react-icons/io5"
import './Navbar.css'
// eslint-disable-next-line react/prop-types
const Navbar = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("visitCount");
    if (storedCount) {
      const newCount = parseInt(storedCount, 10) + 1;
      setVisitCount(newCount);
      localStorage.setItem("visitCount", newCount);
    } else {
      setVisitCount(1);
      localStorage.setItem("visitCount", 1);
    }
  }, []);

  const [open, setOpen] = useState(false)

  const toggleMenu = (e) => {
    e.preventDefault();
    setOpen(!open)
  }



  return (
    <>
       <div className="maindiv">
       <nav>
          <div className="left-nav">
              <img src={logo} alt="" className="logo"/>
          </div>

          <div className="middlelinks">
            <Link to="/" className="links">Home</Link>
            <Link to="/about" className="links">About Us</Link>
            <Link to="/gallery" className="links">Gallery</Link>
            <Link to="/contact" className="links">Contact Us</Link>
          </div>
              <div className="menudiv">
              <a href="" className="menu" onClick={toggleMenu}><IoMenu/></a>
              <div className="options">
                 <ul className={`vanish${open ? 'open' : ''}`}>
                  <li><Link to="/" className="links">Home</Link></li>
                   <li><Link to="/about" className="links" >About Us</Link></li>
                   <li><Link to="/gallery" className="links" >Gallery</Link></li>
                   <li><Link to="/contact" className="links">Contact Us</Link></li>
                 </ul>
              </div>
              </div>

              <div className="rightdiv">
              <div className="visit-counter">
      <IoPersonOutline icon={IoPersonOutline} className="visit-icon" />
      <span className="visit-text">
        {visitCount} {visitCount === 1 ? "visit" : "visits"}
      </span>
    </div>
              </div>
       </nav>
       </div>
    </>
  )
}

export default Navbar