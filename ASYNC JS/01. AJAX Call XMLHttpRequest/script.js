'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  request.open(
    'GET',
    `https://api.restcountries.com/countries/v5?q=${country}`,
  );
  request.setRequestHeader(
    'Authorization',
    'Bearer rc_live_ed75551e946d46e1ad38994ab1af4f36',
  );

  request.send();

  request.addEventListener('load', function () {
    const response = JSON.parse(this.responseText);
    const data = response.data.objects[0];
    console.log(data);

    console.log(data.names.common);

    const html = `
     <article class="country">
          <img class="country__img" src="${data.flag.url_png}" />
          <div class="country__data">
               <h3 class="country__name">${data.names.common}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(2)} M</p>
               <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
               <p class="country__row"><span>💰</span>${data.currencies[0].symbol} ${data.currencies[0].name}</p>
          </div>
     </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('Bangladesh');
