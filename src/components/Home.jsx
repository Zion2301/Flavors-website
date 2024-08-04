import './Home.css';
import { useState, useEffect } from 'react';
import { FiTruck } from "react-icons/fi";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import Product from './Product/Product';

// Import images for products
import Spice1 from '../assets/paprika.jpg';
import Spice2 from '../assets/cinnamon.jpg';
import Spice3 from '../assets/turmeric.jpg';
import Spice4 from '../assets/coriander.webp';
import Spice5 from '../assets/ginger.webp';
import Spice6 from '../assets/nutmeg.webp';
import Spice7 from '../assets/cloves.jpg';
import Spice8 from '../assets/pepper.webp';

const Home = () => {
  const getreviewsfromlocal = () => {
    const saved = localStorage.getItem('reviews');
    return saved ? JSON.parse(saved) : [];
  }

  const [reviews, setReviews] = useState(getreviewsfromlocal());
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [datetime, setDatetime] = useState(new Date().toLocaleString());
  const location = '123 Elm Street, Springfield, SP 12345, United Kingdom';

  const products = [
    { img: Spice1, name: 'Paprika', price: "$3.24", info: "Paprika is a ground spice made from dried red fruits of the larger and sweeter varieties of the plant Capsicum annuum.", status: "In Stock" },
    { img: Spice2, name: 'Cinnamon', price: "$2.50", info: "Cinnamon is a spice obtained from the inner bark of several tree species from the genus Cinnamomum.", status: "In Stock" },
    { img: Spice3, name: 'Turmeric', price: "$4.00", info: "Turmeric is a spice that comes from the turmeric plant. It is commonly used in Asian food.", status: "In Stock" },
    { img: Spice4, name: 'Coriander', price: "$1.80", info: "Coriander is an herb that’s commonly used to flavor international dishes.", status: "In Stock" },
    { img: Spice5, name: 'Ginger', price: "$2.75", info: "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice.", status: "In Stock" },
    { img: Spice6, name: 'Nutmeg', price: "$3.50", info: "Nutmeg is the seed or ground spice of several species of the genus Myristica.", status: "In Stock" },
    { img: Spice7, name: 'Cloves', price: "$4.20", info: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum.", status: "In Stock" },
    { img: Spice8, name: 'Pepper', price: "$2.00", info: "Black pepper is a flowering vine cultivated for its fruit, known as a peppercorn, which is usually dried and used as a spice and seasoning.", status: "In Stock" },
  ];

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
    setShowForm(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDatetime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    savereviews(reviews);
  }, [reviews]);

  const savereviews = (reviews) => {
     localStorage.setItem('reviews', JSON.stringify(reviews));
  };
  

  return (
    <>
      <div className="bannerdiv">
        <div className="randombox">
          <h1>Its <span>Amazing</span> what<br /> spice can do!</h1>
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
        <div className="productCards">
         
        </div>

        <div className="popularProducts">
          <h1 className='popular'>New<span className='products'> Arrivals</span></h1>
          <div className="productCards">
           
          </div>
      </div>

      <div className="popularProducts">
          <h1 className='popular'>Hot<span className='products'> Deals</span></h1>
          <div className="productdiv">
              {/* Add content here */}
          </div>
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
  );
}

export default Home;