'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data) {
  const html = `
    <article class="country">
      <img class="country__img" src="${data.flag.url_png}" />
      <div class="country__data">
        <h3 class="country__name">${data.names.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(2)} M</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].symbol} ${
          data.currencies[0].name
        }</p>
      </div>
    </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/* const getCountryData = function (country) {
  fetch(`https://api.restcountries.com/countries/v5?q=${country}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f36',
      // Authorization: 'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f3',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const countryData = data.data.objects[0];
      console.log(countryData);
      renderCountry(countryData);
    });
}; */

const getCountryData = function (country) {
  fetch(`https://api.restcountries.com/countries/v5?q=${country}`, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f36',
      // Authorization: 'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f3',
    },
  })
    .then(response => response.json())
    .then(data => renderCountry(data.data.objects[0]));
};

getCountryData('Bangladesh');
