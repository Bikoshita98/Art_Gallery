import React, {useState, useContext} from 'react';
import PropTypes from "prop-types";
import { Context } from './Context';

const Image = (img) => {
  const [hovered, setHovered] = useState(false);
  const {toggleFav, addToCart, cartItems, removeFromCart} = useContext(Context);

  function heartIcon(){
    if(img.img.liked_by_user) {
      return <i className='ri-heart-fill favorite' onClick={() => toggleFav(img.img.id)}></i>
    }
    else if (hovered) {
      return <i className='ri-heart-line favorite' onClick={() => toggleFav(img.img.id)}></i>
    }
  }

  function cartIcon(){
    const isPresentInCart = cartItems.some(item => item.img.id === img.img.id)
    
    if(isPresentInCart){
      return <i className='ri-shopping-cart-fill cart' onClick={() => removeFromCart(img.img.id)}></i>
    }
    else if(hovered){
      return <i className='ri-add-circle-line cart' onClick={() => addToCart(img)}></i>
    }

  }

  return (
    <React.Fragment>

      
      <div className="image-container"
        onMouseEnter={
          () => {
            setHovered(true)
          }
        }
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <img src={img.img.urls.small} className="image-grid" alt="from unsplash" />
        {heartIcon()}
        {cartIcon()}
      </div>
    </React.Fragment>

  )
}

Image.protoTypes = {
  className:PropTypes.string,
  img:PropTypes.shape({
    id : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired,
    liked_by_user : PropTypes.bool
  })
}

export default Image