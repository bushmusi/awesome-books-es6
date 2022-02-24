import { DateTime } from 'luxon';
import { Book } from './book-home.js';

export const displayContainer = (item) => {
  const disObj = new Book();
  disObj.updateSection(item);
};

export const displayDate = () => {
  let date = DateTime.now();
  date = date.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL);
  document.getElementById('time-val').innerHTML = `${date}`;
};
