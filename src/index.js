import './styles/Sass/main.sass';
import './assets/pokemon.png';
import './assets/like.svg';
import './assets/bikatshoo.svg';
import './assets/1.svg';
// import './assets/2.svg';
// import './assets/3.svg';
// import './assets/4.svg';
// import './assets/5.svg';
// import './assets/6.svg';
// import './assets/7.svg';
// import './assets/8.svg';
// import './assets/9.svg';
import './assets/x.svg';
import { renderList } from "./modules/pageRendering";

window.addEventListener('load', () => {
    renderList();
  })