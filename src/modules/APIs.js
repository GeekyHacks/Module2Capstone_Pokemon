// I run this code in console when I want to reset the board by creating a id for involvement api

// fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'comment',
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// the id I get running the previous fetch code
// const ID = 'woTq8RsLkSavLaCMQAAP';

// APIs list
const pokemonsAPI = 'https://pokeapi.co/api/v2/pokemon/';
const commentsAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/woTq8RsLkSavLaCMQAAP/comments/';
const likesAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/woTq8RsLkSavLaCMQAAP/likes/';

const pokemonsList = document.getElementById('pokemonList');

// this will get an api array

const GetDataList = async (APIUrl) => {
  const response = await fetch(APIUrl);
  const dataList = await response.json();
  const itemsArray = dataList.results;
  return itemsArray;
};

// to get the pokemon Data
GetDataList(pokemonsAPI);
