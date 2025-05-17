import { mockMovies } from './mock/mock.js';

export class MovieModel {
  constructor() {
    this.movies = [...mockMovies];
  }

  getAll() {
    return this.movies;
  }

  add(movie) {
    movie.id = Date.now();
    this.movies.push(movie);
  }

  delete(id) {
    this.movies = this.movies.filter(m => m.id !== id);
  }

  update(updated) {
    this.movies = this.movies.map(m =>
      m.id === updated.id ? { ...m, ...updated } : m
    );
  }

  filterByStatus(status) {
    let list = this.movies;
    if (status === 'watched')    list = list.filter(m => m.watched);
    if (status === 'unwatched')  list = list.filter(m => !m.watched);
    return list;
  }
}
