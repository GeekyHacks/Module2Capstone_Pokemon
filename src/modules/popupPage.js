const pokemonPopup = document.querySelector('.popup');
const commentBtn = document.querySelectorAll('.commentPopup');

commentBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    
    // const cardIndex = btnIndex;
    pokemonPopup.innerHTML = `
    <div class="pokemonImg">
    <img class="pageX" src="./assets/x.svg" alt="close" />
    <img src="./assets/1.svg" alt="" />
    <h3></h3>
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
    });
  });
});
