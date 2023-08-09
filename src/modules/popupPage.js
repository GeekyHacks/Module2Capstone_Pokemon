import { GetDataObject, pokemonAPI } from './APIs.js';

const pokemonPopup = document.querySelector('.popup');

const getItemById = async (id) => {
  const response = await fetch(`${pokemonAPI}`);
  const data = await response.json();
  console.log(data.results);
  return data.results;
};

export const popupPage = async () => {
  //   let response = await fetch(objectUrl);
  //   const pokeObject = await response.json();
  //   console.log(pokeObject.id);
  getItemById();
  pokemonPopup.innerHTML = `
    <div class="pokemonImg">
    <img class="pageX" src="./assets/x.svg" alt="close" />
    <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
    <h3>${object.name}</h3>
    </div>

  <div class="comments">
    <h3>Recent Comments</h3>
    <ul class="recentComments"></ul>
  </div>
  <form autocomplete="off" class="AddComment">
    <label>Add a Comment</label>
    <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
    <textarea rows="7"></textarea>

    <button id="submit" class="btn" type="submit">Comment</button>
  </form>
    `;
};
