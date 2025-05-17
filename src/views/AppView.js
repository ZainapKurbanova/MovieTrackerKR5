import MovieFormView   from './MovieFormView.js';
import MovieFilterView from './MovieFilterView.js';
import MovieListView   from './MovieListView.js';
import { render, RenderPosition } from '../framework/render.js';

export default class AppView {
  constructor(root) {
    this.root       = root;
    this.formView   = new MovieFormView();
    this.filterView = new MovieFilterView();
    this.listView   = new MovieListView();
  }

  init({ onAdd, onFilter, onEdit, onDelete }) {
    const container = this.root.querySelector('.container');

    render(this.formView,   container, RenderPosition.BEFOREEND);
    render(this.filterView, container, RenderPosition.BEFOREEND);
    render(this.listView,   container, RenderPosition.BEFOREEND);

    this.formView.bindAdd(onAdd);
    this.filterView.bindFilter(onFilter);
    this._onEdit   = onEdit;
    this._onDelete = onDelete;
  }

  update(movies) {
    this.listView.render(movies, this._onEdit, this._onDelete);
  }
}
