import countriesFetch from './services/fetchCountries';
import allCountriesRef from '../template/allCountries.hbs';
import countryRef from '../template/country.hbs';

import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  formSearchRef: document.querySelector('form.form__search'),
  formInputRef: document.querySelector('input.form__input'),
  formCountryRef: document.querySelector('div.form__country'),
  formCountryListRef: document.querySelector('ul.form__country_list'),
};

const debounce = require('lodash.debounce');

function searchCountryHandler(event) {
  event.preventDefault();

  clearFormList();

  const searchQuery = event.target.value;

  if (searchQuery === '') {
    return;
  }

  countriesFetch.fetchCountries(searchQuery).then(data => {
    if (data.length > 10) {
      error({
        text: 'Too many matches found. Please enter a more specific query!',
      });
    } else if (data.status === 404) {
      error({ text: 'Country not found!' });
    } else if (data.length === 1) {
      buildMarkupCountry(data, countryRef);
    } else if (data.length <= 10) {
      buildMarkupCountry(data, allCountriesRef);
    }
  });
}

refs.formSearchRef.addEventListener(
  'input',
  debounce(searchCountryHandler, 500),
);

function buildMarkupCountry(countryBuild) {
  const country = countryBuild.map(item => countryRef(item)).join('');
  refs.formCountryListRef.insertAdjacentHTML('beforeend', country);
}

function clearFormList() {
  refs.formCountryListRef.innerHTML = '';
}
