const CHARACTERSLIST = "https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json";

const fetchAllCharacters = () => fetch(CHARACTERSLIST).then(response => response.json());

export {fetchAllCharacters};

