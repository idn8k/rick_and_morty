const cardContainer = document.querySelector('[data-js="card-container"]');

//    name: 'guy',
//    status: 'alive',
//    type: 'value',
//    episode: ['51', '53'],
//    url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// };

export function createCharacterCard(data) {
   console.log(data);
   data.map((character) => {
      const { name, status, type = '', episode, image } = character;
      const newCard = document.createElement('li');
      newCard.classList.add('card');
      newCard.innerHTML = `
      <div class="card__image-container">
       <img
         class="card__image"
         src=${image}
         alt=${name}
       />
     <div class="card__image-gradient"></div>
       </div>
           <div class="card__content">
       <h2 class="card__title">${name}</h2>
       <dl class="card__info">
       <dt class="card__info-title">Status</dt>
       <dd class="card__info-description">${status}</dd>
       <dt class="card__info-title">Type</dt>
       <dd class="card__info-description">${type}</dd>
       <dt class="card__info-title">Occurrences</dt>
       <dd class="card__info-description">${episode.length}</dd>
     </dl>
   </div>`;

      cardContainer.append(newCard);
   });
}

//--original:
// export function createCharacterCard({ name, status, type = '', episode, url }) {
//    const newCard = document.createElement('li');
//    newCard.innerHTML = `
//    <div class="card__image-container">
//     <img
//       class="card__image"
//       src=${url}
//       alt=${name}
//     />
//   <div class="card__image-gradient"></div>
//     </div>
//         <div class="card__content">
//     <h2 class="card__title">${name}</h2>
//     <dl class="card__info">
//     <dt class="card__info-title">Status</dt>
//     <dd class="card__info-description">${status}</dd>
//     <dt class="card__info-title">Type</dt>
//     <dd class="card__info-description">${type}</dd>
//     <dt class="card__info-title">Occurrences</dt>
//     <dd class="card__info-description">${episode.length}</dd>
//   </dl>
// </div>`;

//    cardContainer.append(newCard);
// }
