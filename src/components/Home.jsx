import './Home.css'
import { useState, useEffect } from 'react';
import { FiTruck } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
const Home = () => {


    const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [datetime, setDatetime] = useState(new Date().toLocaleString())
  const location = '123 Elm Street, Springfield, SP 12345, United Kingdom';

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { name, review };
    setReviews([...reviews, newReview]);
    setName('');
    setReview('');
    setShowForm(false); // Hide the form after submission
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    
  };

  useEffect(() => {
    const interval = setInterval(()=> {
      setDatetime(new Date().toLocaleString())
    }, 1000)
  
    return () => {
      clearInterval(interval);
    }
  }, [])
  return (
      <>
        <div className="bannerdiv">
            <div className="randombox">
                <h1>Its <span>Amazing</span> what<br></br> spice can do!</h1>
                <p>Spices can make a dish zesty, sour, sweet even herby-, but most of all delicious</p>
            </div>
        </div>

        <div className="greydiv">
            <div className="smallgreydiv">
                  <FiTruck className='truck'/>
                  <div className="smallestgreydiv">
                    <h2 className='shipping'>Free Shipping</h2>
                    <p className='order'>On order over 500$</p>
                  </div>
            </div>

            <div className="smallgreydiv">
                  <FaRegCreditCard className='truck'/>
                  <div className="smallestgreydiv">
                    <h2 className='shipping'>Safe Payment</h2>
                    <p className='order'>Easy Payment</p>
                  </div>
            </div>

            <div className="smallgreydiv">
                  <MdOutlineHeadsetMic className='truck'/>
                  <div className="smallestgreydiv">
                    <h2 className='shipping'>Support</h2>
                    <p className='order'>Life time support 24/7</p>
                  </div>
            </div>
        </div>
        <div className="popularProducts">
            <h1 className='popular'>Best-<span className='products'>Sellers</span></h1>
            <div className="productdiv">

            </div>
        </div>

        <div className="popularProducts">
            <h1 className='popular'>New<span className='products'> Arrivals</span></h1>
            <div className="productdiv">

            </div>
        </div>

        <div className="popularProducts">
            <h1 className='popular'>Hot<span className='products'> Deals</span></h1>
            <div className="productdiv">

            </div>
        </div>

        <div className="review-section">
      <h1 className='reviews'>Hear what people say about <span className='us'>Us!</span></h1>
      <button onClick={toggleForm}>
        {showForm ? 'Close Form' : 'Add a Review'}
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="review">Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={handleReviewChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="reviews-list">
        {reviews.map((rev, index) => (
          <div key={index} className="review-item">
            <h2>{rev.review}</h2>
            <p>{rev.name}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="ticker">
      <div className="ticker-content">
        <span>{datetime}</span>
        <span>{location}</span>
      </div>
    </div>
      </>
  )
}

export default Home