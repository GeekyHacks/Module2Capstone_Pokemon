 import { pokemonAPI } from './APIs.js';
 const urlNeeded = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments';
export const renderList = async () => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';
  const pokemonPopup = document.querySelector('.popup');
  const commentBtn = document.querySelectorAll('.commentPopup');
  try {
    // Fetch the list of Pokemon
    let response = await fetch(pokemonAPI);
    let listData = await response.json();
    listData = listData.results;
    console.log(listData);
    // Sort the array elements
    const sortedDataList = [...listData];
    sortedDataList.sort((a, b) => b.score - a.score);
    console.log(sortedDataList);
    const objects = sortedDataList;
    // console.log(objects[0]);
    // Loop through 18 elements of the array
    const getComments = async (item_id) => {
      try {
        // console.log(item_id);
        // Fetch the updated comments after posting
        const commentsResponse = await fetch(
          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments?item_id=${item_id}`
        );
        const commentsData = await commentsResponse.json();
        console.log('Comments Data:', commentsData);
        // Get the recentComments element
        const recentComments = document.querySelector('.recentComments');
        if (commentsData.error) {
          console.log(commentsData.error.message);
        }
        else {
          // console.error('Invalid comments data format:', commentsData);
          recentComments.innerHTML = '';
          commentsData.forEach((comment) => {
            console.log(comment);
            const commentLi = document.createElement('li');
            commentLi.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
            recentComments.appendChild(commentLi);
          });
          document.getElementById('commentCount').textContent = countComments();
        }
      } catch (error) {
        console.error('An error occurred while fetching comments:', error);
      }
    };
    const getLikes = async () => {
      try {
        // Fetch the likes
        const response = await fetch(
          `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes`
        );
        const LikesData = await response.json();
        console.log('Likes Data:', LikesData);
        // Get the recentComments element
        if (LikesData.error) {
          console.log(LikesData.error.message);
        }
        else {
          return LikesData;
        }
      } catch (error) {
        console.error('An error occurred while fetching likes:', error);
      }
    };
    const saveLike = async (item_id) => {
      try {
        // Prepare the data to be sent
        const data = {
          item_id,
        };
        try {
          // Make the POST request to the API
          const postResponse = await fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes`,
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            }
          );
          console.log(await postResponse.text());
          if (postResponse.ok) {
            const likeEl = document.getElementById('likes ' + item_id);
            likeEl.textContent = Number(likeEl.textContent) + 1;
          } else {
            // Handle the error response
            console.error('Failed to post like');
          }
        } catch (error) {
          console.error('An error occurred while posting the like', error);
        }
      } catch (error) {
        console.error('An error occurred while fetching likes:', error);
      }
    };
    const likes = await getLikes();
    for (let i = 0; i < 18; i++) {
      const object = objects[i];
      console.log(object);      // Fetch the Pokemon image
      response = await fetch(object.url);
      const pokeObject = await response.json();
      console.log(pokeObject);
      // Get the image of the Pokemon
      console.log(pokeObject.sprites.other.dream_world.front_default);
      const showPokemon = async () => {
          const pokeResponse = await fetch(object.url);
          const pokeObject = await pokeResponse.json();
          console.log(pokeObject);
          const item_id = pokeObject.id;
          pokemonList.innerHTML = '';
          pokemonPopup.innerHTML = `
            <div class="pokemonImg">
              <img class="pageX" src="./assets/x.svg" alt="close" />
              <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
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
          await getComments(item_id);
          const commentForm = document.querySelector('.AddComment');
          commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const commentInput = document.getElementById('commentText');
            const username = nameInput.value;
            const comment = commentInput.value;
            // Generate a unique item_id            // Prepare the data to be sent
            const data = {
              item_id,
              username,
              comment,
            };
            try {
              // Make the POST request to the API
              const postResponse = await fetch(
                `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data),
                }
              );
              if (postResponse.ok) {
                // Handle the successful response
                console.log('Comment posted successfully');
                getComments(item_id);
              } else {
                // Handle the error response
                console.error('Failed to post comment');
              }
            } catch (error) {
              console.error('An error occurred while posting the comment', error);
            }
            // Clear the input fields
            nameInput.value = '';
            commentInput.value = '';
          });
          const closeBtn = document.querySelector('.pageX');
          closeBtn.addEventListener('click', () => {
            pokemonPopup.innerHTML = '';
            location.reload();
          });
      }
      const li = document.createElement('li');
      li.className = 'pokemonItem';
      const img = document.createElement('img');
      img.src = pokeObject.sprites.other.dream_world.front_default;
      img.alt = object.name;
      const likeDiv = document.createElement('div');
      likeDiv.className = 'likeDiv';
      const h3 = document.createElement('h3');
      const svg = document.createElement('img');
      h3.textContent = object.name;
      svg.src = './assets/like.svg';
      svg.alt = 'like';
      svg.addEventListener(('click'), (()=>{saveLike(i)}))
      likeDiv.appendChild(h3);
      likeDiv.appendChild(svg);
      const commentDiv = document.createElement('div');
      commentDiv.className = 'commentDiv';
      const commentPopup = document.createElement('button');
      commentPopup.textContent = 'Comment';
      commentPopup.addEventListener(('click'), () => {showPokemon()})
      commentPopup.className = 'commentPopup';
      const likesDiv = document.createElement('div');
      const h4 = document.createElement('h4');
      const like = likes.find((x) => x.item_id === i)
      h4.innerHTML = `likes <span id='likes ${i}'>${like? like.likes : 0}</span>`;
      likesDiv.appendChild(h4);
      commentDiv.appendChild(commentPopup);
      commentDiv.appendChild(likesDiv);
      li.appendChild(img);
      li.appendChild(likeDiv);
      li.appendChild(commentDiv);
      // li.innerHTML = `
      //   <li class="pokemonItem">
      //     <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
      //     <div class="likeDiv">
      //       <h3>${object.name}</h3>
      //       <img src="./assets/like.svg" alt="like" />
      //     </div>
      //     <div class="commentDiv">
      //       <button class="commentPopup" data-url="${object.url}"
      //         onclick='${()=>showPokemon()}'>Comment</button>
      //       <div>
      //         <h4>
      //           likes<span>1</span>
      //         </h4>
      //       </div>
      //     </div>
      //   </li>
      // `;
      pokemonList.appendChild(li);
    }
  } catch (error) {
    console.error(error);
  }
};
export const countComments = () => {
  return document.querySelector('.recentComments').childNodes.length;
}