// import { commentsAPI } from './APIs.js';

export const user = document.getElementById('name');
export const comment = document.getElementById('comment');

// export const renderComments = async (listData) => {
//   const recentComments = document.getElementById('recentComments');
// //   recentComments.innerHTML = '';
//   const response = await fetch(commentsAPI);
//   listData = await response.json();
//   listData = listData.result;
// //   const sortedDataList = [...listData];
// //   sortedDataList.sort((a, b) => b.score - a.score);

//   const objects = listData;

//   objects.forEach((object) => {
//     const li = document.createElement('li');
//     li.innerHTML = `
//     ${object.comment} created on ${object.creation_date}by ${object.username}
//        `;
//     recentComments.appendChild(li);
//   });
// };



// for adding comment
export const addNewComment = async (item_id, username, comment) => {

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
  