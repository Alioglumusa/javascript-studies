"use strict"

//---------------PAZAR 25.09.2022-----

//-----------Functions Başlangıç-----------

// function logger() {
//     console.log("Benim adım Musa")
// }


//calling/running/invoking function
// logger(23)


// function meyveİşleme(elmaSayısı, portakalSayısı){
//     console.log(elmaSayısı, portakalSayısı);
//     const meyveSuyu = `${elmaSayısı} elma ve ${portakalSayısı} portakal `
//     return meyveSuyu
// }
    
// const elmaSuyu = meyveİşleme(5, 0)
// console.log(elmaSuyu);
// console.log(meyveİşleme(5, 0))



// const atom = meyveİşleme(2, 4)
// console.log(atom);


// const num = Number("23");


//-------------Örnek Start------
// function ulkeniTanımla(ulke, nufus, baskent) {
//     console.log(ulke, nufus, baskent)
//     const aciklama = `${ulke} 'da ${nufus} milyon insan var ve başkent ${baskent}'dir. `
//     return aciklama
// }

// console.log(ulkeniTanımla("Finlandiya", 6, "Helsinki"));
//-------------Örnek End------

//---------------örnek---------
// function meyveSuyu(elma, portakal) {
//     let meyve = `${elma} elma ve ${portakal} portakal`
//     return meyve // return eklenmezse çalışmaz
// }

// console.log(meyveSuyu(3,5));
//------örnek son-----


//----------------
// return
// function() {
//     return a + b
//     const c = d + e
// } // returnden sonrası işleme alınmaz, durdurulur, const c erişilmez


//ANLAMADIM//
// function birşeyHesaplama() {
//     return 2
// }

// function birşeyHesaplama2() {
//     return "Merhaba"
// }

// function birşeyHesaplama3() {
//     if (Math.random() > 0.5){
//         return 2
// } else {
//     return "Merhaba"
//     }
// }

// function birşeyHesaplama4() {
//     console.log("Bir şey yapıyor");
// }

// function birşeyHesaplama5(sayı) {
//     if (sayı === 42) {
//         return
//     }
//     while (true) {
//         başkaBirşeyYap()
//     }
// }


//-----örnek6----
// function başkaHesaplama(sayı) {
//     if (sayı === 42) {
//         return
//     }

// if (Math.random() > 0.5) {
//         return 2
// } else {
//     return "Merhaba"
//     }
// }
// let x = başkaHesaplama(2)
// let y = başkaHesaplama(42)
// console.log(x);
// console.log(y);
//-----örnek6 son----


//-----------
// let meyve = 5

// function meyveSuyu(elma, portakal) {
//     console.log(elma, portakal);
//     let meyve = `${elma} elma ve ${portakal} portakal`
//     return meyve
// }

// const meyveler = meyveSuyu(10, 5)
// console.log(meyve);


//------örnek---
// function meyve(elma, muz) {
//     const muzSuyu = `${muz} muz suyu hazırlayın `
//     const elmaSuyu = `${elma} elma suyu hazırlayın `
//     return [muzSuyu, elmaSuyu] // array çevirebiliriz []
// }

// console.log(meyve(20,5));
//----örnek -----------


//------örnek---
// function meyve(elma, muz) {
//     const muzSuyu = `${muz} muz suyu hazırlayın `
//     const elmaSuyu = `${elma} elma suyu hazırlayın `
//     return [muzSuyu, elmaSuyu] // bir diziyi nesneye çevirebiliriz []
// }

// const sonuç = meyve(20,5)
// console.log("Muz ve elma suyu karışımı:", sonuç[0]);
//----örnek -----------
