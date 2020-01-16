import React from 'react';

// para ser un componente controlado va a recibir el estado por props. Necesitamos crear una funcion en el padre para enviarla al hijo que sera el controlador del value del input.

const Search =props=>{
  //el input va a ejecutar la función que escribamos aqui que le viene del padre

  const handleChange = (evt)=>{
    props.handleChange(evt.target.value)
  }

  return <form>
    <input onChange={handleChange} type="text"  value={props.value}/>
  </form>
}


export default Search;