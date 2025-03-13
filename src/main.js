import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageAPIRequest from './js/pixabay-api';
import imageRender from './js/render-functions';

import errorIcon from './img/error-message-icon.svg';

const messageOptions = {
  class: 'message',
  titleColor: '#fff',
  titleSize: '16',
  titleLineHeight: '1.5',
  messageColor: '#fff',
  messageSize: '16',
  maxWidth: 432,
  theme: 'dark',
  close: false,
  position: 'topRight',
  timeout: 5000,
};
const errorMessageOptions = {
  ...messageOptions,
  backgroundColor: '#ef4040',
  image: errorIcon,
  imageWidth: 24,
  close: true,
};

const refs = {
  searchForm: document.querySelector('.form'),
  gallery: document.querySelector('.gallery'),
  loader: createEl('span', 'loader'),
};

refs.searchForm.addEventListener('submit', searchFormSubmit);

function createEl(tag, className) {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
}

function searchFormSubmit(event) {
  event.preventDefault();
  const searchText = event.currentTarget.elements.searchText.value.trim();
  if (!textValidation(searchText)) {
    return;
  }
  refs.gallery.innerHTML = '';
  refs.searchForm.insertAdjacentElement('afterend', refs.loader);

  imageAPIRequest(searchText)
    .then(imageData => {
      if (imageData.data.hits.length === 0) {
        createErrorMessage(
          '',
          'Sorry, there are no images matching your search query. Please try again!'
        );
        refs.loader.remove();
        return;
      }
      refs.loader.remove();
      imageRender(imageData.data.hits);
    })
    .catch(error => {
      refs.loader.remove();
      createErrorMessage(
        error.name,
        `Sorry, the following error occured: ${error.message}`
      );
    });
}

function textValidation(text) {
  return text !== '' ? true : false;
}

function createErrorMessage(title, message) {
  iziToast.show({
    ...errorMessageOptions,
    title,
    message,
  });
}
