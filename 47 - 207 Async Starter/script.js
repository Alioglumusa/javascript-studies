"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// function Kullanıcı(isim) {
//   // this = {} (üstü kapalı)
//   // bu nesneye yeni özellikler ekle
//   this.isim = isim
//   this.yöneticiMi = false
//   // return this; (üstü kapalı)
// }

// let kullanıcı = new Kullanıcı('Murat')

// let kullanıcı = {
//   isim: 'Murat',
//   yöneticiMi: false,
// }
// new Kullanıcı("Namık")
// new Kullanıcı("Eda")
// alert(kullanıcı.isim) //Murat
// alert(kullanıcı.yöneticiMi) //false

// let car = {
//  name: "Tofaş",
//  date: 2000,
//  color: "black"
// }

//Person Constructor
// function Person(name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
//   this.calculateAge = function () {
//     return 2022 - this.yearOfBirth
//   }
// }

// let yiğit = new Person('Yiğit', 2009, 'student')
// let murat = new Person('Murat', 1986, 'teacher')

// console.log(yiğit)
// console.log(yiğit.name)
// console.log(yiğit.yearOfBirth)
// console.log(yiğit.job)
// console.log(yiğit.calculateAge())
// console.log('*******************')
// console.log(murat)
// console.log(murat.name)
// console.log(murat.yearOfBirth)
// console.log(murat.job)
// console.log(murat.calculateAge())

// let personal = {
//   Adi: 'Murat',
//   Soyadi: 'Akdağ',
// }

// // let Adi = personal.Adi,
// //   Soyadi = personal.Soyadi
// // console.log(Adi, Soyadi)

// let { Adi: adı, Soyadi: soyadı } = personal
// console.log(adı, soyadı)

// let personal = ['Murat', 'Engin', 'Berna']

// let p1 = personal[0]
// let p2 = personal[1]
// let p3 = personal[2]

// let [p1, p2, p3] = personal
// console.log(p1, p2, p3)
// const ülkeBilgisiAl = function (ülke) {
//   const request = new XMLHttpRequest()
//   request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`)
//   request.send()
//   // console.log(request.responseText)
//   request.addEventListener('load', function () {
//     // console.log(this.responseText)
//     const [data] = JSON.parse(this.responseText)
//     // const data = JSON.parse(this.responseText)[0]
//     console.log(data)
//     const languages = Object.values(data.languages)
//     const currencies = Object.values(data.currencies)
//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${languages[0]}</p>
//             <p class="country__row"><span>💰</span>${currencies[0].name}</p>
//           </div>
//         </article>
//        `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
//   })
// }

// ülkeBilgisiAl('turkey')
// ülkeBilgisiAl('italy')
// ülkeBilgisiAl('germany')

// Object.keys(obj)- anahtaraları dizi şeklinde döndürür.
// Object.values(obj)- değerleri dizi şeklinde döndürür
// Object.entries(obj)- [anahtar,değer] çiftini dizi şeklinde döndürür

// let kullanıcı = {
//   adı: 'Murat',
//   yaşı: 36,
// }

// Object.keys(kullanıcı) === [adı,yaşı]
// Object.values(kullanıcı) === ["Murat",36]
// Object.entries(kullanıcı) ===
//   [
//     ['adı', 'Murat'],
//     ['yaşı', 36],
//   ]

// const object1 = {
//   a: 'metin',
//   b: 42,
//   c: false,
// }
// console.log(Object.values(object1)); === Array ["metin",42,false]
const ülkeyiGöster = function (data, className = "") {
  const languages = Object.values(data.languages);
  const currencies = Object.values(data.currencies);
  const html = ` 
        <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languages[0]}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>
       `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};
const hataGöster = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};

const ülkeVeKomşuÜlkeBilgisiAl = function (ülke) {
  // 1. Ülke İçin Ajax Çağrısı
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${ülke}`);
  request.send();
  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    // 1. Ülkeyi Göster
    ülkeyiGöster(data);
    // Komşu ülkeyi Al
    const [komşu] = data.borders;
    if (!komşu) return;
    // 2. Ülke için Ajax Çağrısı
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${komşu}`);
    request2.send();
    request2.addEventListener("load", function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2)
      ülkeyiGöster(data2, "neighbour");
      // console.log(this.responseText)
    });
  });
};

// ülkeVeKomşuÜlkeBilgisiAl('turkey')
// ülkeVeKomşuÜlkeBilgisiAl('spain')

// setTimeout(() => {
//   console.log('1 saniye geçti')
//   setTimeout(() => {
//     console.log('2 saniye geçti')
//     setTimeout(() => {
//       console.log('3 saniye geçti')
//       setTimeout(() => {
//         console.log('4 saniye geçti')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// const request = new XMLHttpRequest()
// request.open('GET', `https://restcountries.com/v3.1/name/${ülke}`)
// request.send()

// const request = fetch('https://restcountries.com/v3.1/name/turkey')
// console.log(request)

// const ülkeBilgisiAl = function (ülke) {
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then(function (response) {
//       return response.json()
//     })
//     .then(function (data) {
//       ülkeyiGöster(data[0])
//     })
// }

// ülkeBilgisiAl('turkey')
const getJson = function (url, hataMsj = "Bir şeyler ters gitti") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${hataMsj} (${response.status})`);
    return response.json();
  });
};

// const ülkeBilgisiAl = function (ülke) {
//   // Ülke 1
//   fetch(`https://restcountries.com/v3.1/name/${ülke}`)
//     .then((response) => {
//       if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`)
//       return response.json()
//     })
//     .then((data) => {
//       ülkeyiGöster(data[0])
//       // const komşu = data[0].borders[0]
//       const komşu = 'qwqwqwe'
//       if (!komşu) return
//       // Ülke 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${komşu}`)
//       // return 23
//     })
//     .then((response) => {
//       if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`)
//       return response.json()
//     })
//     .then((data) => ülkeyiGöster(data[0], 'neighbour'))
//     .catch((err) => {
//       console.log(`${err} 🧨🧨🧨🧨🧨`)
//       hataGöster(`Bir şeyler ters gitti 🍕🍕🍕🍕 ${err.message}`)
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1
//     })
//   // .then((data) => alert(data))
// }
// btn.addEventListener('click', function () {
//   ülkeBilgisiAl('turkey')
// })

const ülkeBilgisiAl = function (ülke) {
  // Ülke 1
  getJson(`https://restcountries.com/v3.1/name/${ülke}`, "Ülke Bulunamadı")
    // fetch(`https://restcountries.com/v3.1/name/${ülke}`)
    //   .then((response) => {
    //     if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`)
    //     return response.json()
    //   })
    .then((data) => {
      ülkeyiGöster(data[0]);
      console.log(data[0]);
      if (!data[0].borders) throw new Error("Komşu Yok");
      const komşu = data[0].borders[0];
      // const komşu = 'qwqwqwe'
      if (!komşu) return;
      // Ülke 2
      return getJson(
        `https://restcountries.com/v3.1/alpha/${komşu}`,
        "Ülke Bulunamadı"
      );
      // return 23
    })
    // .then((response) => {
    //   if (!response.ok) throw new Error(`Ülke bulunamadı (${response.status})`)
    //   return response.json()
    // })
    .then((data) => ülkeyiGöster(data[0], "neighbour"))
    .catch((err) => {
      console.log(`${err} 🧨🧨🧨🧨🧨`);
      hataGöster(`Bir şeyler ters gitti 🍕🍕🍕🍕 ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
  // .then((data) => alert(data))
};
btn.addEventListener("click", function () {
  // ülkeBilgisiAl('iceland')
});

// ülkeBilgisiAl('qwqwqwqwqw')

// const benNerdeyim = function (lat, lng) {
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=12048250838410237075x70472`
//   )
//     .then((res) => {
//       if (!res.ok) throw new Error(`Geocoding ile ilgili problem ${res.status}`)
//       return res.json()
//     })
//     .then((data) => {
//       console.log(`${data.country}, ${data.city}'desiniz `)
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Ülke bulunamadı (${res.status})`)
//       return res.json()
//     })
//     .then((data) => ülkeyiGöster(data[0], 'neighbour'))
//     .catch((err) => console.error(`${err.message}`))
// }

// benNerdeyim(52.508, 13.381)
// benNerdeyim(19.037, 72.873)
// benNerdeyim(-33.933, 18.474)

// console.log('Test başlasın')
// setTimeout(() => console.log('0 saniye zamanlayıcı'), 0)
// Promise.resolve('Çözülmüş promise 1').then((res) => console.log(res))
// Promise.resolve('Çözülmüş promise 2').then((res) => {
//   for (let i = 0; i < 10000000000; i++) {}
//   console.log(res)
// })
// console.log('Test bitti')

// const piyangoUmudu = new Promise(function (resolve, reject) {
//   console.log('Bugün çekiliyor')
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('Kazandınız 🥂🥂🥂')
//     } else {
//       reject(new Error('Kaybettiniz 🥔🥔'))
//     }
//   }, 2000)
// })

// piyangoUmudu.then((res) => console.log(res)).catch((err) => console.error(err))
// setTimeout(()=>{

//Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// wait(1)
//   .then(() => {
//     console.log('1 saniye bekledim')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('1 saniye bekledim')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('1 saniye bekledim')
//     return wait(1)
//   })
//   .then(() => {
//     console.log('1 saniye bekledim')
//     return wait(1)
//   })
//   .then(() => console.log('4 saniye geçti'))

// Promise.resolve('abc').then((x) => console.log(x))
// Promise.reject(new Error('Problem')).catch((x) => console.error(x))

// console.log('Konum öğrenme')

// const konumAl = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (konum) => resolve(konum),
//     //   (err) => reject(err)
//     // )
//     navigator.geolocation.getCurrentPosition(resolve, reject)
//   })
// }

// konumAl().then((konum) => console.log(konum))

// const benNerdeyim = function () {
//   konumAl()
//     .then((konum) => {
//       const { latitude: lat, longitude: lng } = konum.coords
//       console.log(lat, lng)
//       return fetch(
//         `https://geocode.xyz/${lat},${lng}?geoit=json&auth=12048250838410237075x70472`
//       )
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Geocoding ile ilgili problem ${res.status}`)
//       return res.json()
//     })
//     .then((data) => {
//       console.log(`${data.country}, ${data.city}'desiniz `)
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`)
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Ülke bulunamadı (${res.status})`)
//       return res.json()
//     })
//     .then((data) => ülkeyiGöster(data[0], 'neighbour'))
//     .catch((err) => console.error(`${err.message}`))
// }
// btn.addEventListener('click', benNerdeyim)

const konumAl = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const benNerdeyim = async function (ülke) {
  //Geolocation
  try {
    const konum = await konumAl();
    const { latitude: lat, longitude: lng } = konum.coords;

    //Reverse GeoCoding
    const resGeo = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=93631046629454562434x6314`
    );
    if (!resGeo.ok) throw new Error("Konum bulunamıyor");
    const dataGeo = await resGeo.json();
    // console.log(dataGeo)
    //Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error("Ülkeyi bulamıyor");
    const data = await res.json();
    // console.log(data)
    ülkeyiGöster(data[0]);
    return `${dataGeo.country} ${dataGeo.city}'desiniz `;
  } catch (err) {
    console.log(`${err}`);
    hataGöster(`Bir şeyler ters gitti🍌🍌 ${err.message}`);
    //Asenkron işlevden dönen promise'i reddet
    throw err;
  }
};

// console.log('1. Konum alacak')
// const city = benNerdeyim()
// console.log(city)
// benNerdeyim()
//   .then((city) => console.log(`1: ${city}`))
//   .catch((err) => console.log(`2: ${err.message}`))
//   .finally(() => console.log('3. Konum alındı'))

// ;(async function () {
//   try {
//     const city = await benNerdeyim()
//     console.log(`1: ${city}`)
//   } catch (err) {
//     console.log(`2: ${err.message}`)
//   }
//   console.log('3. Konum alındı')
// })()

// try {
//   let y = 1
//   const x = 2
//   y = 3
// } catch (err) {
//   alert(err.message)
// }
//---------------------------Promise All------------------------------------------
// const üçÜlkeAl = async function (ü1, ü2, ü3) {
//   try {
//     // const [data1] = await getJson(`https://restcountries.com/v3.1/name/${ü1}`)
//     // const [data2] = await getJson(`https://restcountries.com/v3.1/name/${ü2}`)
//     // const [data3] = await getJson(`https://restcountries.com/v3.1/name/${ü3}`)
//     const data = await Promise.all([
//       getJson(`https://restcountries.com/v3.1/name/${ü1}`),
//       getJson(`https://restcountries.com/v3.1/name/${ü2}`),
//       getJson(`https://restcountries.com/v3.1/name/${ü3}`),
//     ])
//     // console.log(data.map((d) => d[0].capital[0]))
//     // console.log([data1.capital[0], data2.capital[0], data3.capital[0]])
//   } catch (err) {
//     console.log(err)
//   }
// }
//---------------------Promise Race---------------------------------
// üçÜlkeAl('turkey', 'spain', 'canada')
// ;(async function () {
//   const res = await Promise.race([
//     getJson(`https://restcountries.com/v3.1/name/italy`),
//     getJson(`https://restcountries.com/v3.1/name/egypt`),
//     getJson(`https://restcountries.com/v3.1/name/mexico`),
//   ])
//   console.log(res[0])
// })()

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error("İstekler çok üzün sürdü"));
    }, sec * 1000);
  });
};

// Promise.race([getJson(`https://restcountries.com/v3.1/name/spain`), timeout(5)])
//   .then((res) => console.log(res[0]))
//   .catch((err) => console.log(err))

//-------------------------- Promise allSettled---------------------------------

Promise.allSettled([
  Promise.resolve("Başarılı"),
  Promise.reject("Hata"),
  Promise.resolve("Bir tane daha başarılı "),
]).then((res) => console.log(res));

Promise.all([
  Promise.resolve("Başarılı"),
  Promise.reject("Hata"),
  Promise.resolve("Bir tane daha başarılı "),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//Promise any
