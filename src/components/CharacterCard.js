import React from 'react';

const CharacterCard = props => {
//console.log(props)
  return <div className='card__container'>
    <img src={props.imgUrl} alt={props.name} />
    <h4>{props.name}</h4>
    <span>{props.specie}</span>
  </div>
}



export default CharacterCard;