import React, {useContext} from 'react';
import { Context } from './Context';
import Image from "./Image";

const Photos = () => {
  const {allPhotos} = useContext(Context);

  const imageElements = allPhotos.map((img) => 
  (
      <Image key={img.id} img={img}/>    
  ))

  return (
    <React.Fragment>

    <h2 className='heading'>Pick the art of your choice from the gallery</h2>
    <main className='photos'>
        {imageElements}
    </main>
    </React.Fragment>
  )
}

export default Photos