import newServices from './services/apiServices';
import cardTemplate from './templates/cardTemp.hbs';
import spinner from './services/spinner';

const refs = {
  searchFormRef: document.querySelector('#search-form'),
  galleryRef: document.querySelector('#gallery'),
  loadMoreBtnRef: document.querySelector(`button[data-action="load-more"]`),
};

refs.searchFormRef.addEventListener('submit', searchFormImgHandler);
refs.loadMoreBtnRef.addEventListener('click', loadMoreBtnHandler);

function searchFormImgHandler(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements.query;

  clearListItems();

  newServices.resetPage();
  newServices.searchQuery = input.value;
  if (input.value === '') {
    return;
  }
  spinner.show();
  newServices
    .fetchArticles()
    .then(hits => {
      spinner.hide();
      insertListItems(hits);
    })
    .catch(error => {
      console.warn(error);
    });

  input.value = '';
}

function loadMoreBtnHandler() {
  newServices
    .fetchArticles()
    .then(hits => {
      spinner.hide();
      insertListItems(hits);
    })
    .catch(error => {
      console.warn(error);
    });
}

function insertListItems(items) {
  const markupBuild = cardTemplate(items);
  const lastLi = refs.galleryRef.lastElementChild;
  refs.galleryRef.insertAdjacentHTML('beforeend', markupBuild);
  if (lastLi) {
    lastLi.nextElementSibling.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

function clearListItems() {
  refs.galleryRef.innerHTML = '';
}
