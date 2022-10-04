"use strict"

//-------Function Declaration && Expression

//---------Function Declaration/Bildirimi
// function yaşHesap1(doğumYılı) {
//     return 2040 - doğumYılı
// }

// let yaş1 = yaşHesap1(1997)
// console.log(yaş1);

// //-------Function Expression/ifadesi
// const yaşHesap2 = function (doğumYılı) {
//     return 2040 - doğumYılı
// }

// const yaş2 = yaşHesap2(1997)
// console.log(yaş1,yaş2);

//fonksiyonlarda değerdir----
// Declaration fonksiyonu tanımlamadan önce çağırabiliriz çalışır. örn let yaş1 i tepeye aldık



// const dönüşYok = function () {
    //no return
// }

// console.log(dönüşYok()); //undefined gelir


// const fn function () { } //ifade


//--örnek---
// bildirildiFunc() // çalışır
// function bildirildiFunc() {
//     console.log("Bildirim!!");
// }


// ifadeFunc() //çalışmaz
// const ifadeFunc = function () {
//     console.log("İfade edildim");
// }
//----örnek son----



//----egzersiz start------
//----egersiz fonksiyon bildirimleri ve ifadeler
// function dünyanınYüzdesi1(popülasyon) {
//     const popülasyonDegeri = (popülasyon / 7900) * 100
//     return popülasyonDegeri
// }

// dünyanınYüzdesi1(34) === (34 / 7900) * 100
// console.log(dünyanınYüzdesi1(34));



// const dünyanınYüzdesi0 = function (popülasyon) {
//     const popülasyonDegeri = (popülasyon / 7900) * 100
//     return popülasyonDegeri
// }

// const dünyanınYüzdesi = dünyanınYüzdesi0(34)
// console.log(dünyanınYüzdesi);
//----egzersiz end------




// const yaşHesap2 = function (doğumYılı) {
//         return 2040 - doğumYılı
//     }
    
//--Arrow Functions
//---
// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı //return yazmadık

// const yaş3 = yaşHesap3(1986) // yaşHesap3(1986) === (doğumYılı) => 2040 - 1986 === 54 === yaş3 === yaşHesap3(1986)
// console.log(yaş3);


//---
// const emekliliğeKalanSüre = (doğumYılı, isim) => {
//     const yaş = 2040 - doğumYılı
//     const emeklilik = 60 - yaş 
//     // return emeklilik
//     return `${isim} ${emeklilik} yıl içerisinde emekli oluyor`
// }

// console.log(emekliliğeKalanSüre(1997, "Musa")); 
// this alamaz arrow functions

//-----------Functions Bitiş-----------