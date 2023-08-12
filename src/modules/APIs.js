// I run this code in console when I want to reset the board by creating a id for involvement api

const pokemonAPI = 'https://pokeapi.co/api/v2/pokemon/';
const commentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/comments';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/y6YPEOFIRnRk7yGZhKxu/likes';

// this will get an api array

const GetDataList = async (APIUrl) => {
  const response = await fetch(APIUrl);
  const dataList = await response.json();
  const itemsArray = dataList.results;
  return itemsArray;
};

// const GetDataObject = async (APIUrl) => {
//   const response = await fetch(APIUrl);
//   const dataList = await response.json();
//   return dataList;
// };

// to get the pokemon Data
GetDataList(pokemonAPI);
export {
  pokemonAPI, commentsAPI, likesAPI, GetDataList,
};
