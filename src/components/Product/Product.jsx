import { useState } from "react"
import "./Product.css"
import Modal from '../Modal/Modal'
// import Paprika from './paprika.avif'
// import Spice from './spice.jpg'
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const Product = (props) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
        <div className="Block">
          <div className="productImage">
            
            <img src={props.img} alt="" />
          </div>

          <div className="productTxt">

            <h1><b>{props.name}</b></h1>
            <p id="price"><b>{props.price}</b></p>
            <i>{[props.icon]}</i>

            <button 
              className="openModalBtn" 
              onClick={() => {setOpenModal(true)}}
            >
              Learn More <FaArrowRight />
            </button>

            {openModal &&
              <Modal  
                closeModal={setOpenModal}  
                mainImg={props.mainImg} 
                img1={props.img1}
                img2={props.img2}
                img3={props.img3}
                img4={props.img4}
                name={props.name}
                price={props.price}
                icon = {[props.icon]}
                info={props.info}
                status={props.status}
              />
              
            }
            
          </div>
        </div>
    </>
  )
}

export default Product;