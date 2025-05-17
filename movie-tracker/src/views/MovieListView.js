import { createElement, render } from '../framework/render.js';
import MovieItemView from './MovieItemView.js';

function template() {
  return `<div id="movie-list" class="card-container"></div>`;
}

export default class MovieListView {
  getTemplate() { return template(); }
  getElement() {
    if (!this.el) this.el = createElement(this.getTemplate());
    return this.el;
  }
  render(movies, onEdit, onDelete) {
    const container = this.getElement();
    container.innerHTML = '';
    movies.forEach(m => {
      const item = new MovieItemView(m);
      item.bindEdit(onEdit);
      item.bindDelete(onDelete);
      render(item, container);
    });
  }
}
