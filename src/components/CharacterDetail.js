import React from 'react';

  const CharacterDetail = props => {
    const { imgUrl, name, status, species, origin, episodes } = props.characters;

    return (
        <div>
          <img src={imgUrl} alt={`${name} avatar`} />
          <div>
            <h2>{name}</h2>
            <span>Status: </span>{status}
            <span>Species: </span>{species}
            <span>Origin: </span>{origin}
            <span>Episodes: </span>{episodes}
          </div>
        </div>
    
    )
  }






export default CharacterDetail;