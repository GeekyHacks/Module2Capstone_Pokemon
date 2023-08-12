import './styles/Sass/main.sass';
import './assets/pokemon.png';
import './assets/like.svg';
import './assets/x.svg';
import { renderList } from './modules/pageRendering.js';

window.addEventListener('load', () => {
  renderList();
});
