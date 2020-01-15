import React from 'react';

const Search =props=>{

  const handleChange = (evt)=>{
    props.handleChange(evt.target.value)
  }

  return <form>
    <input onChange={handleChange} type="text"  value={props.value}/>
  </form>
}


export default Search;