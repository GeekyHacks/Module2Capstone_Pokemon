import { countItems } from '../modules/pageRendering.js';

const ul = document.createElement('ul');
ul.id = 'pokemonList';
document.body.appendChild(ul);
const itemsTest = {
  pokemon: 'item',
};
describe('CRUD operations', () => {
  test('Add comment', () => {
    const lastLength = countItems;
    const commentLi = document.createElement('li');
    commentLi.textContent = itemsTest.pokemon;
    ul.appendChild(commentLi);
    expect(countItems).toBe(lastLength + 1);
  });
});
