export class MoviePresenter {
  constructor(model, view) {
    this.model = model;
    this.view  = view;

    this.view.init({
      onAdd:    this.handleAdd.bind(this),
      onFilter: this.handleFilter.bind(this),
      onEdit:   this.handleEdit.bind(this),
      onDelete: this.handleDelete.bind(this)
    });
    
    this.view.update(this.model.getAll());
  }

  handleAdd(movie) {
    this.model.add(movie);
    this.view.update(this.model.getAll());
  }

  handleDelete(id) {
    this.model.delete(id);
    this.view.update(this.model.getAll());
  }

  handleEdit(id) {
    const orig = this.model.getAll().find(m => m.id === id);
    if (!orig) return;
    const title    = prompt('Новое название:', orig.title);
    const watched  = confirm('Отмечаем как просмотренный?');
    if (title === null) return;
    this.model.update({ id, title, watched});
    this.view.update(this.model.getAll());
  }

  handleFilter(status) {
    const filtered = this.model.filterByStatus(status);
    this.view.update(filtered);
  }
}
