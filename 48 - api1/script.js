'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const ülkeyiGöster = function (data, className = '') {//! boş bir classname atandı 49. Satırdaki neighbour öğesini atabilmek için
  const languages = Object.values(data.languages); //! Burada bir değişken atayarak 16. Satırdaki Kodu dinamik yaptık
  const currencies = Object.values(data.currencies); //! Burada da 17. satırdaki kodu dinamik yapmak için her ülke atandığında [0]. elemanını almasını istedik
  const html = `
    <article class="country ${className}">
              <img class="country__img" src="${data.flags.png}" /> 
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000 ).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${languages[0]}</p>
                <p class="country__row"><span>💰</span>${currencies[0].name}</p>
              </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html); //! kapanmadan önce html'i ekle demek istedik
};
const hataGöster = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};
const getJson = function (url, hataMsj = `Bir şeyler ters gitti`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${hataMsj} (${response.status})`);
    return response.json();
  });
};
const ülkeBilgisiAl = function (ülke) {
  getJson(`https://restcountries.com/v3.1/name/${ülke}`, 'Ülke Bulunamadı')
    //console.log(response)
    .then(data => {
      ülkeyiGöster(data[0]);
      console.log(data[0]);
      if (!data[0].borders) throw new Error('Komşu yok');
      
      const komşu = data[0].borders[Math.floor(Math.random()*(data[0].borders.length))] //! Toplam komşusundan bir tanesini random getirsin
      // const komşu = "qwqw" hata yakalamak için
      if (!komşu) return;
      // Ülke 2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${komşu}`,
        'Ülke Bulunamadı'
      );
    })
    .then(data => ülkeyiGöster(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} 🧨🧨🧨🧨🧨`);
      hataGöster(`Bir şeyler Ters Gitti ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1; //! Herşeyin sonunda kodun görünür olmasını sağlamak için style.opacity =1 yapıldı.
    }); //! Finally kodu olduğu için kod her zaman çalışır bunu test edebilmek için konsolda networkte disable Cache ve network offline
    //! yapılırsa kontrol edilebilir
  // console.log(data)
};


btn.addEventListener('click', function () {
  const country = document.getElementById("country").value;
  ülkeBilgisiAl(country);
  setTimeout(function(){
    window.location.reload();
 }, 8000);
});
