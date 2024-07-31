import './Gallery.css'
import Hovercard from './Hovercard'
import pepper from '../assets/pepper.webp'
import cumin from '../assets/cumin.webp'
import turmeric from '../assets/turmeric.jpg'
import cinnamon from '../assets/cinnamon.jpg'
import paprika from '../assets/paprika.jpg'
import garlic from '../assets/garlic.jpg'
import ginger from '../assets/ginger.webp'
import chilli from '../assets/chilli.jpg'
import nutmeg from '../assets/nutmeg.webp'
import cloves from '../assets/cloves.jpg'
import coriander from '../assets/coriander.webp'
import bay from '../assets/bay.jpg'
const Gallery = () => {
  return (
    <>
      <div className="maindiv">
          <div className="intro">
            <h1 className="about">Our Gallery of Spices</h1>
          </div>

          <div className="gridofspices">
              <Hovercard lilimage = {pepper} blurtext = "Black Pepper" financialservices = "Often referred to as the 'king of spices,' black pepper is used in a variety of cuisines to add heat and depth of flavor."/>

              <Hovercard lilimage = {cumin} blurtext = "Cumin" financialservices = "Known for its earthy, warm flavor, cumin is a staple in Indian, Middle Eastern, and Latin American cuisines."/>

              <Hovercard lilimage = {turmeric} blurtext = "Turmeric" financialservices = "This bright yellow spice is known for its health benefits and is a key ingredient in many Indian and Southeast Asian dishes."/>

              <Hovercard lilimage = {cinnamon} blurtext = "Cinnamon" financialservices = "Popular in both sweet and savory dishes, cinnamon is used in everything from baked goods to curries."/>

              <Hovercard lilimage = {paprika} blurtext = "Paprika" financialservices = "Made from ground red peppers, paprika comes in sweet, smoked, and hot varieties, adding color and flavor to many dishes."/>

              <Hovercard lilimage = {garlic} blurtext = "Garlic" financialservices = "A convenient substitute for fresh garlic, garlic powder is used to add a robust flavor to a variety of dishes."/>

              <Hovercard lilimage = {ginger} blurtext = "Ginger" financialservices = "Fresh or ground, ginger adds a spicy, aromatic flavor to both sweet and savory dishes, commonly used in Asian cuisine."/>

              <Hovercard lilimage = {chilli} blurtext = "Chilli-Powder" financialservices = "A blend of ground dried chilies and other spices, chili powder adds heat and complexity to dishes like chili con carne and tacos."/>

              <Hovercard lilimage = {nutmeg} blurtext = "Nutmeg" financialservices = "Often used in baking and holiday dishes, nutmeg has a warm, slightly sweet flavor."/>

              <Hovercard lilimage = {cloves} blurtext = "Cloves" financialservices = "These dried flower buds have a strong, sweet, and slightly bitter flavor, often used in spice blends and holiday recipes."/>

              <Hovercard lilimage = {coriander} blurtext = "Coriander" financialservices = "The seeds of the cilantro plant, coriander has a warm, citrusy flavor and is used in a variety of cuisines, including Indian and Middle Eastern."/>

              <Hovercard lilimage = {bay} blurtext = "Bay Leaves" financialservices = "Often used to add depth to soups, stews, and sauces, bay leaves are typically removed before serving."/>
          </div>
      </div>
    </>
  )
}

export default Gallery