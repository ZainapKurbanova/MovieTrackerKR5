import { createElement } from '../framework/render.js';

function template() {
  return `
    <form id="movie-form" class="movie-form">
      <h2>Добавить Фильм</h2>
      <input type="text" id="movie-title" placeholder="Название фильма" required />
      <label>
        <input type="checkbox" id="movie-status" />
        Просмотрен
      </label>
      <button type="submit">Добавить Фильм</button>
    </form>
  `;
}

export default class MovieFormView {
  getTemplate() { return template(); }
  getElement() {
    if (!this.el) this.el = createElement(this.getTemplate());
    return this.el;
  }
  bindAdd(handler) {
    this.getElement().addEventListener('submit', e => {
      e.preventDefault();
      const title = this.el.querySelector('#movie-title').value.trim();
      const watched = this.el.querySelector('#movie-status').checked;
      if (title) {
        handler({ title, watched });
        this.el.reset();
      }
    });
  }
}
