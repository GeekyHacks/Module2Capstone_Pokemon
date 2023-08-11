import { pokemonAPI } from './APIs.js';

export default renderList = async (listData) => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';
  // to get the pokemon main object that has name & url
  const response = await fetch(pokemonAPI);
  listData = await response.json();
  listData = listData.results;

  // console.log(listData);

  // to sort the array elements
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  // console.log(sortedDataList);
  const objects = sortedDataList;
  console.log(objects[0]);
  // to loop through 18 elements of the array
  for (let i = 0; i < 18; i++) {
    const li = document.createElement('li');
    const pokemonPopup = document.querySelector('.popup');
    const commentBtn = document.querySelectorAll('.commentPopup');

    const object = objects[i];
    // to fetch the pokemon Image
    const response = await fetch(object.url);
    const pokeObject = await response.json();
    // console.log(pokeObject);

    // to get the image of pokemon
    //  console.log(pokeObject.sprites.other.dream_world.front_default);

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

    commentBtn.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const clickedUrl = btn.getAttribute('data-url');
        const pokeResponse = await fetch(clickedUrl);
        const pokeObject = await pokeResponse.json();
        pokemonList.innerHTML = '';
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
        const closeBtn = document.querySelector('.pageX');
        closeBtn.addEventListener('click', () => {
          pokemonPopup.innerHTML = '';
          window.location.reload();
        });
      });
    });
    pokemonList.appendChild(li);
  }
};
