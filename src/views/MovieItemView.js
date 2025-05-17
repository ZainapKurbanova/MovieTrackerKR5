import { createElement } from '../framework/render.js';

function template(movie) {
  return `
    <div class="card ${movie.watched ? 'watched' : ''}" data-id="${movie.id}">
      <div class="card-title">${movie.title}</div>
      <div class="card-details">
        Статус: ${movie.watched ? '✔' : '✖'}<br/>
      </div>
      <button class="edit-btn">Редактировать</button>
      <button class="delete-btn">Удалить</button>
    </div>
  `;
}

export default class MovieItemView {
  constructor(movie) {
    this.movie = movie;
  }
  getTemplate() { return template(this.movie); }
  getElement() {
    if (!this.el) this.el = createElement(this.getTemplate());
    return this.el;
  }
  bindDelete(handler) {
    this.getElement().querySelector('.delete-btn')
      .addEventListener('click', () => handler(this.movie.id));
  }
  bindEdit(handler) {
    this.getElement().querySelector('.edit-btn')
      .addEventListener('click', () => handler(this.movie.id));
  }
}
