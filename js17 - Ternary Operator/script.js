"use strict"

//-----Ternary Operator Başlangıç----

const yaş = 23
// yaş >= 18 ? console.log("Araba kullanabilir") : console.log("Yan koltuk benim");

// const arabaKullanabilirMi =
//     yaş >= 18 ? "Araba kullanabilir" : "Yan koltuk benim"
// console.log(arabaKullanabilirMi);


// let araba2
// if (yaş >= 18) {
//     araba2 = "bmw"
// } else {
//     araba2 = "oyuncak"
// }

// console.log(araba2)


// const araba = yaş >= 18 ? "araba sürebilir" : "araba süremez"

// console.log(`Bu yaşta ${yaş >= 18 ? "araba sürebilir" : "araba süremez"}`);
// üçlü operatör
//-----Ternary Operator Bitiş----


//-----------------örnek-1 başlangıç -----------

// const country = "turkey";
// const population = 13;

// const ortNufus = population >= 100 ? "Türkiye nüfusu ortalamanın üzerinde" : "Türkiyenin nüfusu ortalamanın altında"
// console.log(`${population >= 100 ? "Türkiye nüfusu ortalamanın üzerinde" : "Türkiyenin nüfusu ortalamanın altında"} `)
//-----------------örnek-1 bitiş -----------

//-----------------örnek-2 başlangıç -----------
// const age = 21

// if (age > 18) {
//     console.log("Gençsin Kola iç");
// } else if (age > 58) {
//     console.log("Kolayı bırakmalısın");
// } else {
//     console.log("Su iç");
// }


// age > 18
//     ? age > 58
//         ? console.log("Kolayı bırakmalısın")
//         : console.log("Gençsin Kola iç")
//     : console.log("Su iç");
 
//-----------------örnek-2 bitiş -----------


//-----------------örnek-3 başlangıç -----------

// const age = 17

// let drink = age >= 18 ? "Kolayı severim" :
//     age >= 16 ? "Sodayı severim" :
//         age >= 10 ? "Şekerli içecek severim" :
//             age >= 8 ? "Meyve suyu severim" :
//                 "Süt içmeyi severim"

// console.log(drink);
//-----------------örnek-3 bitiş -----------



//-------Challange Start---------

// const hesap = 275

// let bahsis = hesap >= 50 && hesap <= 300
//     ? `${(hesap *15) / 100} `
//     : `${(hesap *20) / 100} `

// const hesapBahsis = Number(hesap) + Number(bahsis)

// console.log(`Fatura ${hesap}, bahşiş ${bahsis} ve toplam değer ${hesapBahsis} `)

//-------Challange END---------
//-----basic kısım bitti


// let bahsiss = hesap >= 50 && hesap <= 300
//     ? hesap * 0.15 : hesap * 0.20
// const hesapBahsiss = hesap + bahsiss
// console.log(`${bahsiss} budur ${hesapBahsiss} toplam değer`);


