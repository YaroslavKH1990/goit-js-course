const url = 'https://restcountries.eu/rest/v2/name/';

export default {
  fetchCountries(searchQuery) {
    return fetch(url + searchQuery).then(res => res.json());
  },
};
