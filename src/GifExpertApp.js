import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
//rafc

const GifExpertApp = () => {

  //const initial = [ 'One Punch', 'Cazador X', 'Dragon Ball' ]
  const [categorias, setCategoria] = useState([]);

  return (
    <>
      <h1> GifExpertApp </h1>
      <hr />
      <AddCategory setCategoria={ setCategoria }/>
        { categorias.map((cat, id) => ( 
            <GifGrid 
              key = { cat }
              categoria = { cat } />
          )) 
        }
    </>
  )
}

export default GifExpertApp