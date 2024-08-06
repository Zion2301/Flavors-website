/* eslint-disable react/jsx-key */

// import '../Product/Product.css'
import './Productlist.css'
import Banner from '../../assets/banner.jpg'
import Product from '../Product/Product';
import Chilli from '../../assets/chilli.jpg';
import Chilli1 from '../../assets/chilli1.jpg';
import Chilli3 from '../../assets/chilli3.jpg';
import Chilli4 from '../../assets/chilli4.jpg';
import turmeric from '../../assets/turmeric.jpg';
import turmeric1 from '../../assets/turmeric1.jpeg';
import turmeric2 from '../../assets/turmeric2.jpg';
import turmeric3 from '../../assets/turmeric3.jpg';
import cinnamon from '../../assets/cinnamon.jpg'
import cinnamon1 from '../../assets/cinnamon1.webp'
import cinnamon2 from '../../assets/cinnamon2.jpg'
import cinnamon3 from '../../assets/cinnamon3.webp'
import garlic from '../../assets/garlic.jpg'
import garlic1 from '../../assets/garlic1.webp'
import garlic2 from '../../assets/garlic2.webp'
import garlic3 from '../../assets/garlic3.webp'
import { FaStar } from "react-icons/fa";
import paprika from '../../assets/paprika.jpg'
import paprika1 from '../../assets/paprika1.webp'
import paprika2 from '../../assets/paprika2.avif'
import paprika3 from '../../assets/paprika3.webp'
import cumin from '../../assets/cumin.webp'
import cumin1 from '../../assets/cumin1.jpg'
import cumin2 from '../../assets/cumin2.jpg'
import cumin3 from '../../assets/cumin3.jpg'
import cloves from '../../assets/cloves.jpg'
import cloves1 from '../../assets/cloves1.jpg'
import cloves2 from '../../assets/cloves2.avif'
import cloves3 from '../../assets/cloves3.png'
import coriander from '../../assets/coriander.webp'
import coriander1 from '../../assets/coriander1.jpg'
import coriander2 from '../../assets/coriander2.webp'
import coriander3 from '../../assets/coriander3.webp'

const ProductList = () => {
  return (
    <div className='productBox'>
      <Product
        img={Chilli}
        mainImg={Chilli}
        img1={Chilli}
        img2={Chilli3}
        img3={Chilli1}
        img4={Chilli4}
        name="Chilli"
        price="$3.76"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Chilli is a spicy fruit from the Capsicum genus, used to add heat and flavor to food. It varies in spiciness and is rich in vitamins and antioxidants."}
        status={"In Stock"}
      />

<Product
        img={turmeric}
        mainImg={turmeric}
        img1={turmeric}
        img2={turmeric1}
        img3={turmeric2}
        img4={turmeric3}
        name="Turmeric"
        price="$4.56"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Turmeric is a vibrant yellow spice derived from the root of a plant related to ginger. It's been used for centuries in both cooking and traditional medicine, particularly in Indian cuisine."}
        status={"In Stock"}
      />

<Product
        img={cinnamon}
        mainImg={cinnamon}
        img1={cinnamon}
        img2={cinnamon1}
        img3={cinnamon2}
        img4={cinnamon3}
        name="Cinnamon"
        price="$9.76"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Cinnamon is a popular spice derived from the inner bark of trees belonging to the Cinnamomum genus. Known for its sweet, warm aroma and flavor, it's widely used in both sweet and savory dishes."}
        status={"In Stock"}
      />

<Product
        img={garlic}
        mainImg={garlic}
        img1={garlic}
        img2={garlic1}
        img3={garlic2}
        img4={garlic3}
        name="Garlic"
        price="$2.76"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Garlic is a pungent bulbous plant in the Allium family, closely related to onions, leeks, and shallots. It's a staple ingredient in countless cuisines worldwide, prized for its strong flavor and aroma."}
        status={"In Stock"}
      />

<Product
        img={paprika}
        mainImg={paprika}
        img1={paprika}
        img2={paprika1}
        img3={paprika2}
        img4={paprika3}
        name="Paprika"
        price="$8.56"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Paprika is a spice made from dried and ground red peppers. It's known for its vibrant color, ranging from bright red to deep orange."}
        status={"In Stock"}
      />

<Product
        img={cumin}
        mainImg={cumin}
        img1={cumin}
        img2={cumin1}
        img3={cumin2}
        img4={cumin3}
        name="Cumin"
        price="$3.96"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Cumin is a spice derived from the dried seeds of the Cuminum cyminum plant. It's a staple in many cuisines around the world, particularly in Middle Eastern, Indian, and Mexican dishes."}
        status={"In Stock"}
      />

<Product
        img={cloves}
        mainImg={cloves}
        img1={cloves}
        img2={cloves1}
        img3={cloves2}
        img4={cloves3}
        name="Cloves"
        price="$7.76"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Cloves are the dried flower buds of the clove tree. They have a strong, warm, and slightly sweet flavor with a pungent aroma."}
        status={"In Stock"}
      />

<Product
        img={coriander}
        mainImg={coriander}
        img1={coriander}
        img2={coriander1}
        img3={coriander2}
        img4={coriander3}
        name="Coriander"
        price="$11.76"
        icon={[
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar className='goldStar'/>,
          <FaStar />
        ]}
        info={"Coriander, in both its seed and leaf form, is a rich source of vitamins, minerals, and antioxidants. It's also believed to have digestive benefits."}
        status={"In Stock"}
      />

      
      </div>
      
      
  );
}

export default ProductList;