import React, {useContext,useState} from 'react';
import {Context} from "./Context";
import CartItem from './CartItem';

const Cart = () => {
  const {cartItems,emptyCart} = useContext(Context);
  const [buttonText, setButtonText] = useState("Place Order");
  let sum = 0;
  const [cartTotal, setCartTotal] = useState()
  
  
    const getData = (data) => {      
      if(!isNaN(data))
        sum = sum + data;      
      setCartTotal(sum)
    }
    
  
  const cartItemElements = cartItems.map((item,index) => (
    <CartItem key={item.img.id}
    item={item}
    dummy={getData}
    count = {index} //0 //1
    noOfItems = {cartItems.length} //2
    />
    ))

    function placeOrder(){
    setButtonText("Ordering...")
    setTimeout(() => {
      setButtonText("Place Order")
      emptyCart()
    }, 3000)
  }

  return (
    <React.Fragment>
    <main className='cart-page'>
        <h1 className='checkout'>Check Out</h1>
        
      {
        cartItems.length > 0 &&
        <div>
          <div className="cart-content">
            <h2>Cart Items</h2>
            <h2>Art</h2>
            <h2>Price</h2>
          </div>

          {cartItemElements}
            <h2 className='total-cost'>Total:{cartTotal}</h2>
          <div className='order-button'>
            {cartItems.length > 0 && <button className='place-order' onClick={() => placeOrder()}>{buttonText}</button>}
          </div>
        </div>

      }
        
        {cartItems.length === 0 && <p>Your Cart is empty. Please fill in</p>}
    </main>

    </React.Fragment>
  )
}

export default Cart