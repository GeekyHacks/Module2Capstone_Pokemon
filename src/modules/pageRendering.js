// import { pokemonAPI } from './APIs.js';

// export const renderList = async (listData) => {
//   const pokemonList = document.getElementById('pokemonList');
//   pokemonList.innerHTML = '';
//   // to get the pokemon main object that has name & url
//   let response = await fetch(pokemonAPI);
//   listData = await response.json();
//   listData = listData.results;

//   console.log(listData);

//   // to sort the array elements
//   const sortedDataList = [...listData];
//   sortedDataList.sort((a, b) => b.score - a.score);
//   console.log(sortedDataList);
//   const objects = sortedDataList;
//   console.log(objects[0]);
//   // to loop through 18 elements of the array
//   for (let i = 0; i < 18; i++) {
//     const li = document.createElement('li');
//     const pokemonPopup = document.querySelector('.popup');
//     const commentBtn = document.querySelectorAll('.commentPopup');

//     const object = objects[i];
//     // to fetch the pokemon Image
//     let response = await fetch(object.url);
//     const pokeObject = await response.json();
//     console.log(pokeObject);

//     // to get the image of pokemon
//     console.log(pokeObject.sprites.other.dream_world.front_default);

//     li.innerHTML = `
//       <li class="pokemonItem">
//       <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//       <div class="likeDiv">
//         <h3>${object.name}</h3>
//         <img src="./assets/like.svg" alt="like" />
//       </div>
//       <div class="commentDiv">
//         <button class="commentPopup" data-url="${object.url}">Comment</button>
//         <div>
//           <h4>
//             likes<span>1</span>
//           </h4>
//         </div>
//       </div>
//     </li>
//            `;

//     commentBtn.forEach((btn) => {
//       btn.addEventListener('click', async () => {
//         const clickedUrl = btn.getAttribute('data-url');
//         const pokeResponse = await fetch(clickedUrl);
//         const pokeObject = await pokeResponse.json();
//         pokemonList.innerHTML = '';
//         pokemonPopup.innerHTML = `
//                  <div class="pokemonImg">
//                  <img class="pageX" src="./assets/x.svg" alt="close" />
//                  <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//                  <h3>${object.name}</h3>
//                  </div>
//                <div class="comments">
//                  <h3>Recent Comments</h3>
//                  <ul class="recentComments"></ul>
//                </div>
//                <form autocomplete="off" class="AddComment">
//                  <label>Add a Comment</label>
//                  <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
//                  <textarea rows="7"></textarea>
//                  <button id="submit" class="btn" type="submit">Comment</button>
//                </form>
//                  `;
//         const closeBtn = document.querySelector('.pageX');
//         closeBtn.addEventListener('click', () => {
//           pokemonPopup.innerHTML = '';
//           location.reload();
//         });
//       });
//     });
//     pokemonList.appendChild(li);
//   }
// };

// import { pokemonAPI } from './APIs.js';

// export const renderList = async () => {
//   const pokemonList = document.getElementById('pokemonList');
//   pokemonList.innerHTML = '';

//   try {
//     // Fetch the list of Pokemon
//     let response = await fetch(pokemonAPI);
//     let listData = await response.json();
//     listData = listData.results;

//     console.log(listData);

//     // Sort the array elements
//     const sortedDataList = [...listData];
//     sortedDataList.sort((a, b) => b.score - a.score);
//     console.log(sortedDataList);
//     const objects = sortedDataList;
//     console.log(objects[0]);

//     // Loop through 18 elements of the array
//     for (let i = 0; i < 18; i++) {
//       const li = document.createElement('li');
//       const pokemonPopup = document.querySelector('.popup');
//       const commentBtn = document.querySelectorAll('.commentPopup');

//       const object = objects[i];

//       // Fetch the Pokemon image
//       response = await fetch(object.url);
//       const pokeObject = await response.json();
//       console.log(pokeObject);

//       // Get the image of the Pokemon
//       console.log(pokeObject.sprites.other.dream_world.front_default);

//       li.innerHTML = `
//         <li class="pokemonItem">
//           <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//           <div class="likeDiv">
//             <h3>${object.name}</h3>
//             <img src="./assets/like.svg" alt="like" />
//           </div>
//           <div class="commentDiv">
//             <button class="commentPopup" data-url="${object.url}">Comment</button>
//             <div>
//               <h4>
//                 likes<span>1</span>
//               </h4>
//             </div>
//           </div>
//         </li>
//       `;

//       commentBtn.forEach((btn) => {
//         btn.addEventListener('click', async () => {
//           const clickedUrl = btn.getAttribute('data-url');
//           const pokeResponse = await fetch(clickedUrl);
//           const pokeObject = await pokeResponse.json();
//           pokemonList.innerHTML = '';
//           pokemonPopup.innerHTML = `
//             <div class="pokemonImg">
//               <img class="pageX" src="./assets/x.svg" alt="close" />
//               <img src="${pokeObject.sprites.other.dream_world.front_default}" alt="${object.name}" />
//               <h3>${object.name}</h3>
//             </div>
//             <div class="comments">
//               <h3>Recent Comments</h3>
//               <ul class="recentComments"></ul>
//             </div>
//             <form autocomplete="off" class="AddComment">
//               <label>Add a Comment</label>
//               <input type="text" id="name" placeholder="Your Name" required maxLength="20" />
//               <textarea rows="7"></textarea>
//               <button id="submit" class="btn" type="submit">Comment</button>
//             </form>
//           `;
//           const closeBtn = document.querySelector('.pageX');
//           closeBtn.addEventListener('click', () => {
//             pokemonPopup.innerHTML = '';
//             location.reload();
//           });
//         });
//       });
//       pokemonList.appendChild(li);
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

import { pokemonAPI } from './APIs.js';

// Function to generate a unique ID
function generateUniqueId() {
  // Generate a random timestamp value
  const timestamp = Date.now();

  // Generate a random alphanumeric string
  const randomString = Math.random().toString(36).substring(2, 8);

  // Concatenate the timestamp and random string to form the unique ID
  const uniqueId = `item_${timestamp}_${randomString}`;

  return uniqueId;
}

export const renderList = async () => {
  const pokemonList = document.getElementById('pokemonList');
  pokemonList.innerHTML = '';

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
    console.log(objects[0]);

    // Loop through 18 elements of the array
    for (let i = 0; i < 18; i++) {
      const li = document.createElement('li');
      const pokemonPopup = document.querySelector('.popup');
      const commentBtn = document.querySelectorAll('.commentPopup');

      const object = objects[i];

      // Fetch the Pokemon image
      response = await fetch(object.url);
      const pokeObject = await response.json();
      console.log(pokeObject);

      // Get the image of the Pokemon
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
              <textarea rows="7" id="commentText"></textarea>
              <button id="submit" class="btn" type="submit">Comment</button>
            </form>
          `;
          const commentForm = document.querySelector('.AddComment');
          commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
        
            const nameInput = document.getElementById('name');
            const commentInput = document.getElementById('commentText');
        
            const username = nameInput.value;
            const comment = commentInput.value;
        
            // Generate a unique item_id
            const item_id = generateUniqueId();
        
            // Prepare the data to be sent
            const data = {
              item_id,
              username,
              comment,
            };
        
            try {
              // Make the POST request to the API
              const postResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
        
              if (postResponse.ok) {
                // Handle the successful response
                console.log('Comment posted successfully');
        
                try {
                  // Fetch the updated comments after posting
                  const commentsResponse = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments/');
                  const responseData = await commentsResponse.json();
                  const commentsData = responseData.comments;
        
                  // Get the recentComments element
                  const recentComments = document.querySelector('.recentComments');
        
                  // Clear the existing list
                  recentComments.innerHTML = '';
        
                  if (Array.isArray(commentsData)) {
                    if (commentsData.length === 0) {
                      console.log('No comments available');
                    } else {
                      // Loop through the comments and create list items
                      commentsData.forEach((comment) => {
                        const commentLi = document.createElement('li');
                        commentLi.textContent = comment.comment;
                        recentComments.appendChild(commentLi);
                      });
                    }
                  } else {
                    console.error('Invalid comments data format:', commentsData);
                  }
                } catch (error) {
                  console.error('An error occurred while fetching comments:', error);
                }
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
        });
      });
      pokemonList.appendChild(li);
    }
  } catch (error) {
    console.error(error);
  }
};
