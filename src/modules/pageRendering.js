import { pokemonAPI } from './APIs.js';

export const renderList = async (listData) => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';
  // to get the pokemon main object that has name & url
  let response = await fetch(pokemonAPI);
  listData = await response.json();
  listData = listData.results;

  console.log(listData);

  // to sort the array elements
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  console.log(sortedDataList);
  const objects = sortedDataList;
  console.log(objects[0]);
  // to loop through 18 elements of the array
  for (let i = 0; i < 18; i++) {
    const li = document.createElement('li');

    const object = objects[i];
    // to fetch the pokemon Image
    let response = await fetch(object.url);
    const pokeObject = await response.json();
    console.log(pokeObject);

    // to get the image of pokemon
    console.log(pokeObject.sprites.other.dream_world.front_default);

    li.innerHTML = `
      <li class="pokemonItem">
      <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
      <div class="likeDiv">
        <h3>${object.name}</h3>
        <img src="./assets/like.svg" alt="like" />
      </div>
      <div class="commentDiv">
        <button class="commentPopup" data-url="${object.url}">Comment</button>
        <div>
          <h4>
            likes<span>1</span>
          </h4>
        </div>
      </div>
    </li>
           `;
   
    pokemonList.appendChild(li);
  }
};
