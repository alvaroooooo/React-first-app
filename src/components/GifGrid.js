import React, { useState, useEffect } from 'react'
import { getGif } from '../helpers/getGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {
  
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGif(categoria)
      .then((imgs) => (setImages(imgs)))
  }, [categoria]);

  console.log(images)
  return (
    <>
    <h3> { categoria } </h3>
    <div className="card-grid"> 
      {images.map(( img, id ) => (
        <GifGridItem 
        key={ img.id }
        { ...img } />) 
      )}
    </div>
    </>
    )
}

