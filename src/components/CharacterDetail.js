import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
  const { image, name, status, species, origin, episode } = props.singleCharacter;
  return (
    <div className="App2">
      <Link className="card__link"to={'/'}>>Volver</Link>
      <div className="card__detail">
        <img src={image} alt={name} />
        <div className="card__text">
        <h2 className="card__title">{name}</h2>
        <span>Status: {status}</span>
        <span>Species: {species}</span>
        <span>Origin: {origin.name}</span>
        <span>Episodes: {episode.length}</span>
        </div>
      </div>
    </div>

  )
}

export default CharacterDetail;

