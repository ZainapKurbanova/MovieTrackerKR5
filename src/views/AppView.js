import MovieFormView from './MovieFormView.js';
import MovieFilterView from './MovieFilterView.js';
import MovieListView from './MovieListView.js';
import { render, RenderPosition } from '../framework/render.js';

export default class AppView {
  constructor() {
    this.formView = new MovieFormView();
    this.filterView = new MovieFilterView();
    this.listView = new MovieListView();
  }

  init({ onAdd, onFilter, onEdit, onDelete }) {
    const formContainer = document.querySelector('.movie-form');
    const filterContainer = document.querySelector('.movie-filter');
    const listContainer = document.querySelector('#movie-list');

    render(this.formView, formContainer, RenderPosition.BEFOREEND);
    render(this.filterView, filterContainer, RenderPosition.BEFOREEND);
    render(this.listView, listContainer, RenderPosition.BEFOREEND);

    this.formView.bindAdd(onAdd);
    this.filterView.bindFilter(onFilter);
    this._onEdit = onEdit;
    this._onDelete = onDelete;
  }

  update(movies) {
    this.listView.render(movies, this._onEdit, this._onDelete);
  }
}
