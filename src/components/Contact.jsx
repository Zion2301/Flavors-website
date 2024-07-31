import './Contact.css'
import logo from '../assets/logo.png'
const Contact = () => {
  return (
    <>
       <div className="contactbox">
        <h1 className='talk'>Talk to Us</h1>

         <div className="totalsides">
         <div className="leftside">
             <img src={logo} alt="" className='bottomlogo'/>
             <p className='describe'>Flavors is dedicated to bringing the finest, most aromatic spices from around the world to your kitchen. Our mission is to enhance your culinary experience with high-quality, ethically sourced spices that add vibrant flavors to your dishes. Whether youre a professional chef or a home cook, Flavors is here to inspire your cooking and help you create unforgettable meals.</p>
        </div>
           <div className="rightside">
            <h2 className='info'>Contact Info</h2>
           <div className="eachcontact">
              <p className='email'>Email: </p>
              <p className='theemail'>flavororg@gmail.com</p>
           </div>

           <div className="eachcontact">
              <p className='email'>Address: </p>
              <p className='theemail'>123 Elm Street, Springfield, SP 12345, United Kingdom</p>
           </div>

           <div className="eachcontact">
              <p className='email'>Phone Number: </p>
              <p className='theemail'>+234 703 457 9983</p>
           </div>
           </div>
         </div>

           <p className='copyright'>Copyright &copy; 2024 flavors Inc</p>
       </div>
    </>
  )
}

export default Contact