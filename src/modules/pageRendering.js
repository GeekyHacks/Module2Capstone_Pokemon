import { pokemonsAPI } from './APIs.js';

export const renderList = async (listData) => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';
// to get the pokemon main object that has name & url
  let response = await fetch(pokemonsAPI);
  listData = await response.json();
  listData = listData.results;


  console.log(listData);

  // to sort the array elements 
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  console.log(sortedDataList);
  const objects = sortedDataList;
  console.log(objects);
  // to loop through 18 elements of the array
  for (let i = 0; i < 18; i++) {
    const li = document.createElement('li');

    const object = objects[i];

    const objectUrl = object.url;
    console.log(objectUrl);
// to fetch the pokemon Image
    let response = await fetch(objectUrl);
    const Pokeobject = await response.json();
    console.log(Pokeobject);

// to get the image of pokemon
    console.log(Pokeobject.sprites.other.dream_world.front_default);

    li.innerHTML = `
    <li class="pokemonItem">
    <img src="${Pokeobject.sprites.other.dream_world.front_default}" alt="${object.name}" />
    <div class="likeDiv">
      <h3>${object.name}</h3>
      <img src="./assets/like.svg" alt="like" />
    </div>
    <div class="commentDiv">
      <button>Comment</button>
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
