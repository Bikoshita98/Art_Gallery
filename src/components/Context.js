import React, {useState, useEffect, createContext} from 'react'
const Context = createContext();

const ContextProvider = (props) => {
  const [allPhotos, setAllPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])
  const url = "https://api.unsplash.com/photos/?client_id=AoMPMSjsjncIhNObW_BQJO1_hSok5TPX4KIMLUgTmw4";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setAllPhotos(data))
  },[])

  function toggleFav(id){
    const favImgArray = allPhotos.map(photo => {
      if(photo.id === id){
        return {
          ...photo,
          liked_by_user: !photo.liked_by_user
        }
      }
      else{
        return photo;
      }
    })
    setAllPhotos(favImgArray);
  }

  function addToCart(newItem){
    setCartItems(prevItem => [...prevItem, newItem]);
  }

  function removeFromCart(id){
    setCartItems(prevItem => prevItem.filter(item => item.img.id !== id))
  }

  function getRandomPrice(){
    const randomPrice = Math.floor(Math.random()*10+1);
    return randomPrice;
  }

  function emptyCart(){
    setCartItems([])
  }
  
  return (
    <Context.Provider value={{allPhotos, toggleFav, cartItems,addToCart, removeFromCart, getRandomPrice, emptyCart}}>
        {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}