import { pokemonAPI } from './APIs.js';

export const countComments = () => document.querySelector('.recentComments').childNodes.length;
export const countItems = () => document.querySelector('#pokemonList').childNodes.length;

const itemsList = document.getElementById('countItems');

export const renderList = async () => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';
  const pokemonPopup = document.querySelector('.popup');
  // Fetch the list of Pokemon
  const response = await fetch(pokemonAPI);
  let listData = await response.json();
  listData = listData.results;
  // Sort the array elements
  const sortedDataList = [...listData];
  sortedDataList.sort((a, b) => b.score - a.score);
  const objects = sortedDataList;
  // Loop through 18 elements of the array
  const getComments = async (itemId) => {
    // Fetch the updated comments after posting
    const commentsResponse = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments?item_id=${itemId}`,
    );
    const commentsData = await commentsResponse.json();
    // Get the recentComments element
    const recentComments = document.querySelector('.recentComments');
    if (!commentsData.error) {
      // console.error('Invalid comments data format:', commentsData);
      recentComments.innerHTML = '';
      commentsData.forEach((comment) => {
        const commentLi = document.createElement('li');
        commentLi.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
        recentComments.appendChild(commentLi);
      });
      document.getElementById('commentCount').textContent = countComments();
    }
  };
  const getLikes = async () => {
    // Fetch the likes
    const response = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes',
    );
    const LikesData = await response.json();
    // Get the recentComments element
    if (LikesData.error) {
      return LikesData.error.message;
    }
    return LikesData;
  };
  const saveLike = async (itemId) => {
    // Prepare the data to be sent
    const data = {
      item_id: itemId,
    };
    // Make the POST request to the API
    const postResponse = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    if (postResponse.ok) {
      const likeEl = document.getElementById(`likes ${itemId}`);
      likeEl.textContent = Number(likeEl.textContent) + 1;
    }
  };
  const likes = await getLikes();

  for (let i = 0; i < 18; i += 1) {
    const object = objects[i];
    // Fetch the Pokemon image
    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`;
    const showPokemon = async () => {
      const pokeResponse = await fetch(object.url);
      const pokeObject = await pokeResponse.json();
      const itemId = pokeObject.id;
      pokemonList.innerHTML = '';
      pokemonPopup.innerHTML = `
          <div class="pokemonImg">
            <img class="pageX" src="./assets/x.svg" alt="close" />
            <img src="${imageSrc}" alt="${object.name}" />
            <h3>${object.name}</h3>
          </div>
          <div class="comments">
            <h3>Recent Comments (<span id='commentCount'>0</span>)</h3>
            <ul class="recentComments"></ul>
          </div>
          <form autocomplete="off" class="AddComment">
            <label>Add a Comment</label>
            <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
            <textarea rows="7" id="commentText"></textarea>
            <button id="submit" class="btn" type="submit">Comment</button>
          </form>
        `;
      await getComments(itemId);
      const commentForm = document.querySelector('.AddComment');
      commentForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('commentText');
        const username = nameInput.value;
        const comment = commentInput.value;
        // Generate a unique item_id            // Prepare the data to be sent
        const data = {
          item_id: itemId,
          username,
          comment,
        };
        // Make the POST request to the API
        const postResponse = await fetch(
          'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          },
        );
        if (postResponse.ok) {
          // Handle the successful response
          getComments(itemId);
        }
        // Clear the input fields
        nameInput.value = '';
        commentInput.value = '';
      });
      const closeBtn = document.querySelector('.pageX');
      closeBtn.addEventListener('click', () => {
        pokemonPopup.innerHTML = '';
        window.location.reload();
      });
    };
    const li = document.createElement('li');
    li.className = 'pokemonItem';
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = object.name;
    const likeDiv = document.createElement('div');
    likeDiv.className = 'likeDiv';
    const h3 = document.createElement('h3');
    const svg = document.createElement('img');
    h3.textContent = object.name;
    svg.src = './assets/like.svg';
    svg.alt = 'like';
    svg.addEventListener('click', () => {
      saveLike(i);
    });
    likeDiv.appendChild(h3);
    likeDiv.appendChild(svg);
    const commentDiv = document.createElement('div');
    commentDiv.className = 'commentDiv';
    const commentPopup = document.createElement('button');
    commentPopup.textContent = 'Comment';
    commentPopup.addEventListener('click', () => {
      showPokemon();
    });
    commentPopup.className = 'commentPopup';
    const likesDiv = document.createElement('div');
    const h4 = document.createElement('h4');
    const like = likes.find((x) => x.item_id === i);
    h4.innerHTML = `likes <span id='likes ${i}'>${like ? like.likes : 0}</span>`;
    likesDiv.appendChild(h4);
    commentDiv.appendChild(commentPopup);
    commentDiv.appendChild(likesDiv);
    li.appendChild(img);
    li.appendChild(likeDiv);
    li.appendChild(commentDiv);
    pokemonList.appendChild(li);
  }
  itemsList.textContent = countItems();
};
