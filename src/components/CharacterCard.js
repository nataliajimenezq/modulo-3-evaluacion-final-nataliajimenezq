import React from 'react';

const CharacterCard = props => {

  const {imgUrl, name, specie } = props
//console.log(props)
  return <div className='card__container'>
    <img src={imgUrl} alt={name} />
    <h2>{name}</h2>
    <span>{specie}</span>
  </div>
}



export default CharacterCard;