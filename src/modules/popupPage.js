import { pokemonAPI } from './APIs.js';
import { pokemonList } from './pageRendering.js';

// const commentBtn = document.querySelectorAll('.commentPopup');
const main = document.querySelector('main');
const pokemonPopup = document.querySelector('.popup');

export const popup = async (Data) => {
  let response = await fetch(pokemonAPI);
  Data = await response.json();
  Data = Data.results;

  console.log(Data);

  for (let i = 0; i < 18; i++) {
    const object = Data[i];

    const response = await fetch(object.url);
    console.log(object.url);
    const pokeObject = await response.json();

    console.log(pokeObject);
    //    const clickedUrl = btn.getAttribute('data-url');
    //         const pokeResponse = await fetch(clickedUrl);
    //         const pokeObject = await pokeResponse.json();
    // const pokeResponse = await fetch(clickedUrl);
    // const pokeObject = await pokeResponse.json();
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
  }

  main.appendChild(pokemonPopup);
};








import { pokemonAPI } from './APIs.js';

export const renderList = async (listData) => {
  
  // to loop through 18 elements of the array
  for (let i = 0; i < 18; i++) {
    const li = document.createElement('li');
    const pokemonPopup = document.querySelector('.popup');
    const commentBtn = document.querySelectorAll('.commentPopup');

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
          location.reload();
        });
      });
    });
    pokemonList.appendChild(li);
  }
};


export const popupPage = async (listData) => {

    await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments/', {
      method: 'POST',
      body: JSON.stringify({
        item_id: 'item5',
        username: 'you',
        comment: 'byebye',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => {
        if (response.ok) {
          // If response is successful, you can log a success message
          console.log('Comment added successfully');
        } else {
          // If response is not successful, handle the error
          console.error('Error adding comment:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  