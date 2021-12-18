export default class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }

  getHTMLcontent(indexOfCard) {
    return `<div id="${indexOfCard}" class="library__card-container ${this.isRead ? '' : 'not-read'}">
    <span class="library__card-button--delete">x</span>
    <span class="library__card-info"><strong>Title: </strong>${this.title}</span>
    <span class="library__card-info"><strong>Author: </strong>${this.author}</span>
    <span class="library__card-info"><strong>Pages: </strong>${this.pages}</span>
    <div class="library__card-button--read">
      <label for="read">Mark as read:</label>
      <input type="checkbox" id="read" name="read" ${this.isRead ? 'checked' : ''}>
    </div>
    </div>`;
  }

  changeReadStatus() {
    this.isRead = !this.isRead;
  }
}
