import { createCharacterCard } from './components/CharacterCard/CharacterCard.js';

const cardContainer = document.querySelector('[data-js="card-container"]');

const searchBarContainer = document.querySelector(
   '[data-js="search-bar-container"]'
);

const searchBar = document.querySelector('[data-js="search-bar"]');

//--Pagination:
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// const URL = 'https://rickandmortyapi.com/api/character';

// States
let maxPage = '';
let page = 1;
let searchQuery = '';

async function fetchCharacters(page) {
   pagination.textContent = `${page} / ${maxPage}`;
   try {
      const response = await fetch(
         `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
      );
      const data = await response.json();

      if (!response.ok) {
         console.log('Something went wrong...!');
      }

      maxPage = data.info.pages;
      pagination.textContent = `${page} / ${maxPage}`;

      return data.results;
   } catch (error) {
      console.log('ERROR:', error);
   }
}

async function render() {
   cardContainer.innerHTML = '';
   const chars = await fetchCharacters(page);
   chars.map((char) => {
      createCharacterCard(char);
   });
}

render();

// createCharacterCard(chars);

nextButton.addEventListener('click', async () => {
   if (page <= maxPage - 1) {
      page++;
      pagination.textContent = `${page} / ${maxPage}`;
      // const chars = await fetchCharacters(page);
      // createCharacterCard(chars);
      render();
   } else {
      return;
   }
});

prevButton.addEventListener('click', async () => {
   if (page > 1) {
      page--;
      pagination.textContent = `${page} / ${maxPage}`;
      // const chars = await fetchCharacters(page);
      // createCharacterCard(chars);
      render();
   } else {
      return;
   }
});

searchBar.addEventListener('submit', (e) => {
   e.preventDefault();
   const formData = new FormData(e.target);
   const data = Object.fromEntries(formData);
   searchQuery = data.query;
   page = 1;
   render();
});
