import React from "react";
import Header from "./components/Header";
import {Routes, Route} from "react-router-dom";
import Photos from "./components/Photos";
import Cart from "./components/Cart";

function App() {
  //console.log("hello from app")
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Photos/>} />
        <Route path="/cart"element={<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
