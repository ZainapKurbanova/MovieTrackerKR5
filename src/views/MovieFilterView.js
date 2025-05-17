import { createElement } from '../framework/render.js';

function template() {
  return `
    <div class="movie-filter">
      <h2>Фильтры</h2>
      <fieldset>
        <legend>Статус:</legend>
        <label><input type="radio" name="status-filter" value="all" checked/> Все</label>
        <label><input type="radio" name="status-filter" value="watched"/> Просмотренные</label>
        <label><input type="radio" name="status-filter" value="unwatched"/> Непросмотренные</label>
      </fieldset>
    </div>
  `;
}

export default class MovieFilterView {
  getTemplate() { return template(); }
  getElement() {
    if (!this.el) this.el = createElement(this.getTemplate());
    return this.el;
  }
  bindFilter(handler) {
    this.getElement().addEventListener('change', () => {
      const status = this.el.querySelector('input[name="status-filter"]:checked').value;
      handler(status);
    });
  }
}
