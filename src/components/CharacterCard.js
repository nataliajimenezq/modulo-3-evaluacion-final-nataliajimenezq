import React from 'react';

const CharacterCard = props => {

  const {imgUrl, name, specie } = props
//console.log(props)
  return <div className='card__content'>
    <img src={imgUrl} alt={name} className="card__image" />
    <h2 className="card__title">{name}</h2>
    <span className="card__text">{specie}</span>
  </div>
}

export default CharacterCard;