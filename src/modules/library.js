export default class Library {
  constructor() {
    this.books = [];
  }

  removeBook(indexOfBook) {
    this.books.splice(indexOfBook, 1);
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    return this.books;
  }

  writeToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}
