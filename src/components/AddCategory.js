import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategoria }) => {
  
  const [inputValue, setInputValue] = useState('') //Tiene que tener algo por el input
  const changeEvent = ( e ) => ( setInputValue(e.target.value) );
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategoria(cats => [inputValue , ...cats]);
    setInputValue('');
  }

  return (
    <form onSubmit={ handleSubmit }>
      <input type='text'
        value={ inputValue }
        onChange={ changeEvent }/> 

    </form>
  )
}

AddCategory.propTypes = {
  setCategoria: PropTypes.func.isRequired
}