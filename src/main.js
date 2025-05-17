import { MovieModel }      from './model.js';
import AppView             from './views/AppView.js';
import { MoviePresenter }  from './presenter.js';

document.addEventListener('DOMContentLoaded', () => {
  const model     = new MovieModel();
  const view      = new AppView();
  new MoviePresenter(model, view);
});
