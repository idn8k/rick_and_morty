import { createCharacterCard } from './components/CharacterCard/CharacterCard.js';

const searchBarContainer = document.querySelector(
   '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const URL = 'https://rickandmortyapi.com/api/character';

// States
const maxPage = 1;
const page = 1;
const searchQuery = '';

async function fetchCharacters() {
   try {
      const response = await fetch(URL);
      const data = await response.json();

      if (!response.ok) {
         console.log('Something went wrong...!');
      }

      return data.results;
   } catch (error) {
      console.log('ERROR:', error);
   }
}

const chars = await fetchCharacters();

createCharacterCard(chars);
