import React from 'react';
import {Link} from 'react-router-dom';

  const CharacterDetail = props => {


    return (
        <div className="card__container">
          <img src={props.singleCharacter.image} alt={`${props.singleCharacter.name} avatar`} />

            <h2>{props.singleCharacter.name}</h2>
            <div>
            <span>Status:{props.singleCharacter.status}</span>
            <span>Species: {props.singleCharacter.species}</span>
            {/* <span>Origin: {props.singleCharacter.origin}</span> */}
            {/* <span>Episodes: {props.singleCharacter.episodes}</span>  */}
            </div>
          
        </div>
    
    )
  }

export default CharacterDetail;

