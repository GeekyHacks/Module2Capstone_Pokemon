// I run this code in console when I want to reset the board by creating a id for involvement api
// const comment ={'name':'comment'}

// async function addNewComment(itemId, username, comment) {
//   // const apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments', {
//     method: 'POST',
//     body: JSON.stringify({
//       item_id: itemId,
//       username,
//       comment,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
// }

// the id I get running the previous fetch code
// const ID = 'woTq8RsLkSavLaCMQAAP';

// APIs list
// const appID = 'y6YPEOFIRnRk7yGZhKxu';
const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
const commentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes';

// const pokemonList = document.getElementById('pokemonList');

// this will get an api array

const GetDataList = async (APIUrl) => {
  const response = await fetch(APIUrl);
  const dataList = await response.json();
  const itemsArray = dataList.results;
  return itemsArray;
};

const GetDataObject = async (APIUrl) => {
  const response = await fetch(APIUrl);
  const dataList = await response.json();
  return dataList;
};

// to get the pokemon Data
GetDataList(pokemonAPI);




export { pokemonAPI, commentsAPI, likesAPI, GetDataList, GetDataObject };
