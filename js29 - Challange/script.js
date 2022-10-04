
//-----challange start-----

// const hesap = 100

// let bahsiss = hesap >= 50 && hesap <= 300
//     ? hesap * 0.15 : hesap * 0.20
// const hesapBahsiss = hesap + bahsiss
// console.log(`${bahsiss} bahşiş budur, ${hesapBahsiss} toplam değer`);


// const fatura = [125, 555, 44]

// function bahşişHesap(fatura) {
//     const faturaHesaplama = fatura >= 50 && fatura <= 300
//                 ? fatura * 0.15 : fatura * 0.20
//     return faturaHesaplama
// }


// const hesaplar = [bahşişHesap(fatura[0]),
//         bahşişHesap(fatura[1]),
//         bahşişHesap(fatura[2]),
// ]

// console.log(hesaplar);

//-----challange end-----



//---challange derste yapılan start---

const bahşişHesap = function (fatura) {
        return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
}

// const bahşişHesap1 = (fatura) => fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2

const fatura = [125, 555, 44]

const bahşişler = [
        bahşişHesap(fatura[0]),
        bahşişHesap(fatura[1]),
        bahşişHesap(fatura[2]),
]
console.log(fatura, bahşişler);

const toplam = [fatura[0] + bahşişler[0], [fatura[1] + bahşişler[1]], [fatura[2] + bahşişler[2]]]
console.log(toplam);




//------------Intro To Arrays Bitiş------------
