import './styles.css';
import Book from './modules/book';
import Library from './modules/library';

//  Lets the dropdown for adding books appear and disappear
document.addEventListener('click', (e) => {
  if (e.target.closest('.library__form') !== null) return;

  const isBookDropdownButton = e.target.matches('.library__add-button');
  const bookDropdownForm = document.querySelector('.library__form');

  if (isBookDropdownButton) {
    bookDropdownForm.classList.toggle('active');
    return;
  }

  bookDropdownForm.classList.remove('active');
});
