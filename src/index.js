import './styles.css';
import Book from './modules/book';
import Library from './modules/library';

const myStorage = JSON.parse(localStorage.getItem('books'));
const myLibrary = new Library();

function loadLibrarySkeleton() {
  document.body.innerHTML = `
  <div class="header__container">
    <div class="header__title text">
      📚 Better Library
    </div>
  </div>

  <div class="library__container">
    <div class="library__new-book-dropdown">
      <button class="library__add-button">+</button>
      <form class="library__form text">
        <label for="title">Book title:</label>
        <input type="text" id="title" name="title" required>
        <label for="author">Author:</label>
        <input type="text" id="author" name="author" required>
        <label for="pages">Pages:</label>
        <input type="number" id="pages" name="pages" required>
        <div>
          Read Book:
        </div>
        <div>
          <label for="hasRead">Yes</label>
          <input type="radio" id="hasRead" name="read" value="true">
          <label for="hasNotRead">No</label>
          <input type="radio" id="hasNotRead" name="read" value="false">
        </div>
        <button type="submit" class="library__form-submit text" value="Submit!">Submit!</button>
      </form>
    </div>
  </div>`;

  const formSubmitBtn = document.querySelector('.library__form-submit');
  const bookDropdownForm = document.querySelector('.library__form');

  //  Lets the dropdown for adding books appear and disappear
  document.addEventListener('click', (e) => {
    if (e.target.closest('.library__form') !== null) return;

    const isBookDropdownButton = e.target.matches('.library__add-button');

    if (isBookDropdownButton) {
      bookDropdownForm.classList.toggle('active');
      return;
    }
    bookDropdownForm.classList.remove('active');
  });

  // Create a new Book through form
  formSubmitBtn.addEventListener('click', () => {
    if (
      !document.querySelector('#title').checkValidity()
      || !document.querySelector('#author').checkValidity()
      || !document.querySelector('#pages').checkValidity()
    ) return;
    myLibrary.addBook(new Book(
      bookDropdownForm[0].value,
      bookDropdownForm[1].value,
      bookDropdownForm[2].value,
      bookDropdownForm[3].checked,
    ));
    myLibrary.writeToLocalStorage();
  });
}

function loadLibraryContent() {
  for (let i = 0; i < myLibrary.books.length; i += 1) {
    const newCard = document.createElement('div');
    newCard.innerHTML = myLibrary.books[i].getHTMLcontent(i);

    document.querySelector('.library__container').insertBefore(
      newCard,
      document.querySelector('.library__new-book-dropdown'),
    );

    const deleteButton = newCard.querySelector('.library__card-button--delete');
    deleteButton.addEventListener('click', () => {
      myLibrary.removeBook(i);
      myLibrary.writeToLocalStorage();
      loadLibrarySkeleton();
      loadLibraryContent();
    });

    const readButton = newCard.querySelector('.library__card-button--read');
    readButton.addEventListener('click', () => {
      const wrapperNode = newCard.querySelector('.library__card-container');
      wrapperNode.classList.toggle('not-read');
      myLibrary.books[i].changeReadStatus();
      myLibrary.writeToLocalStorage();
    });
  }
}

if (localStorage.key(0)) {
  for (let i = 0; i < myStorage.length; i += 1) {
    myLibrary.addBook(new Book(
      myStorage[i].title,
      myStorage[i].author,
      myStorage[i].pages,
      myStorage[i].isRead,
    ));
  }
}

loadLibrarySkeleton();
loadLibraryContent();
