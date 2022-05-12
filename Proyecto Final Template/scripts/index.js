let pokemons = [];
let selects = [];

// Request the Sprite for the Pokemon Selected
const getSprite = async pokemon => {
  try {
    const pokeData = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const { sprites } = await pokeData.json();

    return sprites.front_default;
  } catch (error) {
    return 'http://pm1.narvii.com/6508/dbd421799e1fc9118c02766e5c13836c87db6070_00.jpg';
  }
};

// Fill Options with the Name of the Pokemons
const renderOptions = () => {
  selects = document.querySelectorAll('select');

  selects.forEach(select => {
    pokemons.forEach(pokemon => {
      const option = document.createElement('option');

      option.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
      option.value = pokemon.name;

      select.appendChild(option);
    });
  });
};

// Fetch Pokemons name
const loadPokemons = async () => {
  try {
    const pokeData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=251');
    const { results } = await pokeData.json();

    pokemons = [...results];

    renderOptions();
  } catch (error) {
    console.log('Something wrong happened');
  }
};

// Show Pokemon Img when select option change
const handleSelect = async ({ value, name }) => {
  const sprite = await getSprite(value);
  const img = document.querySelector(`#${name}`);
  img.src = sprite;
};

// Validate if all Pokemons are selected
const checkPokemonSelected = () =>
  [...selects].map(select => select.value).some(val => val === '0')
    ? alert('You must choose 5 pokemons for each team')
    : true;

const validateTeams = () => {
  const isReady = true; //checkPokemonSelected();

  if (isReady) {
    selects.forEach(select => (select.disabled = true));

    team1.members = [...selects]
      .filter(select => select.name.includes('team1') && select.value !== '0')
      .map(select => select.value);
    team2.members = [...selects]
      .filter(select => select.name.includes('team2') && select.value !== '0')
      .map(select => select.value);
  }

  return isReady;
};

window.addEventListener('load', loadPokemons);
