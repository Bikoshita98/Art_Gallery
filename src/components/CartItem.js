import React, { useContext} from "react";
import {Context} from "./Context";


function CartItem(props) {
    const {item} = props;
    const {getRandomPrice} = useContext(Context);
    const {removeFromCart} = useContext(Context);
    let random;
    if(props.count<props.noOfItems) //0<2, 1<2, 2<2
       random = getRandomPrice();
    
    console.log(props.count, props.noOfItems, random )

    return (
        <React.Fragment>

            <div className="cart-item">
                <i className="ri-delete-bin-line" onClick={() => removeFromCart(item.img.id)}></i>
                <img src={item.img.urls.small} width="130px" alt="selected img" />
                <h2> {random}</h2>
            </div>
            
            {props.dummy(random)}

        </React.Fragment>

        
    )

}

export default CartItem;
