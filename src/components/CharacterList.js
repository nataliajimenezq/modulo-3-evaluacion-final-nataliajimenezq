import React from 'react';
import CharacterCard from './CharacterCard';
import {Link} from 'react-router-dom';


const CharacterList = props => {

  console.log(props)
  return <ul className='list__container'>
    {props.allCharacters
      .filter(characters => props.value === '' || characters.name.toLowerCase().includes(props.value.toLowerCase()))
      .map((characters) => <li key={characters.id}>
        <Link
          to={`/characters/${characters.id}`}>
          <CharacterCard
          imgUrl={characters.image}
          name={characters.name}
          specie={characters.species}
        />
        </Link>
      </li>
      )}
  </ul>

}


export default CharacterList;