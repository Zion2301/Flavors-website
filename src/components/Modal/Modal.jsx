import { useState } from 'react';
import './Modal.css';
import { FaFacebookF } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Modal = ({ closeModal, mainImg, img1, img2, img3, img4, name, price, info, status, icon }) => {
  // Initialize state for the main image
  const [currentMainImg, setCurrentMainImg] = useState(mainImg);

  return (
    <>
      <div className="modalBackground">
        <div className='modal'>
          <button 
            className='closeBtn'
            onClick={() => closeModal(false)}
          > 
            X
          </button>
          <div className="modalBody">
            <div className="productImg">
              <div className="mainImg">
                <img src={currentMainImg} alt="" />
              </div>
              <div className="otherImg">
                <img 
                  src={img1} 
                  alt="" 
                  className='sampleImg'
                  onClick={() => setCurrentMainImg(img1)}
                />
                <img 
                  src={img2} 
                  alt="" 
                  className='sampleImg'
                  onClick={() => setCurrentMainImg(img2)}
                />
                <img 
                  src={img3} 
                  alt="" 
                  className='sampleImg'
                  onClick={() => setCurrentMainImg(img3)}
                />
                <img 
                  src={img4} 
                  alt="" 
                  className='sampleImg'
                  onClick={() => setCurrentMainImg(img4)}
                />
              </div>
              <div className="shareLinks">
                <p><FaShareAlt /> Share this :</p>
                <i><FaFacebookF /></i>
                <i><FaInstagram /></i>
                <i><FaPinterestP /></i>
              </div>
            </div>
            <div className="productInfo">
              <h1>{name}</h1>
              <p id='price'><b>{price}</b></p>
              <i>{icon}</i>
              <p id='info'>{info}</p>
              <p id='status' className='inStock'><b><TiTick />{status}</b></p>
              <button className='cartBtn'>Add to Cart <FaCartPlus /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;