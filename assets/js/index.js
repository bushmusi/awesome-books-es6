import { form, Book } from '../../modules/book-home.js';
import { displayContainer, displayDate } from '../../modules/display-box.js';

const bookObj = new Book();
bookObj.fillBooks();
const navList = document.querySelectorAll('.nav-item');
navList.forEach((val) => {
  val.addEventListener('click', (e) => {
    const currentNode = document.getElementById(e.target.id);
    displayContainer(currentNode);
  });
});

form.addEventListener('submit', bookObj.storeBooks);

displayDate();
