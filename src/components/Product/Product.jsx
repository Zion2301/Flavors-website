import { useState } from "react"
import "./Product.css"
import Modal from '../Modal/Modal'
import paprika from '../../assets/paprika.jpg'
import { FaArrowRight } from "react-icons/fa";


const Product = (props) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
       <div className="productBox">
        <div className="Block">
          <div className="productImage">
            <img src={props.img} alt="" />
          </div>

          <div className="productTxt">

            <blockquote><b>{props.name}</b></blockquote>
            <p id="price"><b>{props.price}</b></p>
            <i>{props.icon}</i>

            <button 
              className="openModalBtn" 
              onClick={() => {setOpenModal(true)}}
            >
              Learn More <FaArrowRight />
            </button>

            {openModal &&
              <Modal  
                closeModal={setOpenModal}
                imgmain={props.img} 
                mainImg={props.mainImg} 
                img1={props.img}
                img2={props.img}
                img3={props.img}
                img4={props.img}
                name={props.name}
                price={props.price}
                info={props.info}
                status={props.status}
            />}
          </div>
        </div>
       </div>
    </>
  )
}

export default Product;