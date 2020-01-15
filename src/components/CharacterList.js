import React from 'react';
import CharacterCard from './CharacterCard';


const CharacterList = props => {

  console.log(props)
  return <ul className='list__container'>
    {props.allCharacters
    .map(characters => <li key={characters.id}>

    <CharacterCard
      imgUrl={characters.image}
      name={characters.name}
      specie={characters.species}
    />
    </li>
    )}
</ul>
  
}

  
export default CharacterList;