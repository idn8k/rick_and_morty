import { createCharacterCard } from './components/CharacterCard/CharacterCard.js';

const searchBarContainer = document.querySelector(
   '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');

//--Pagination:
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

const URL = 'https://rickandmortyapi.com/api/character';

// States
const maxPage = 42; //!! to make it dynamic!
let page = 1;
const searchQuery = '';

async function fetchCharacters(page) {
   pagination.textContent = `${page} / ${maxPage}`;
   console.log(page);
   try {
      const response = await fetch(
         `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();

      if (!response.ok) {
         console.log('Something went wrong...!');
      }

      const maxPages = data.info.pages;

      return data.results;
   } catch (error) {
      console.log('ERROR:', error);
   }
}

const chars = await fetchCharacters(page);
createCharacterCard(chars);

nextButton.addEventListener('click', async () => {
   if (page <= maxPage - 1) {
      page++;
      pagination.textContent = `${page} / ${maxPage}`;
      const chars = await fetchCharacters(page);
      createCharacterCard(chars);
   } else {
      return;
   }
});

prevButton.addEventListener('click', async () => {
   if (page > 1) {
      page--;
      pagination.textContent = `${page} / ${maxPage}`;
      const chars = await fetchCharacters(page);
      createCharacterCard(chars);
   } else {
      return;
   }
});
