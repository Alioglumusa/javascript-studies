
// --------------------------------------------------------------------------
// const age = Number(prompt(`Please enter your age: `))
// if (age === 100) {
//   console.log('Congrats you have reached the age of 100')
// } else if (age >= 18) {
//   console.log(`You are eligible to vote`)
// } else console.log(`You can apply for voting in ${18 - age}`)


// ----------------

// --------------Boolean Logic Başlangıç------------
// AND
//A.Murat'ın ehliyeti var
//B.Murat gözlük kullanıyor

//Murat'ın ehliyeti var AND Murat gözlük kullanıyor

//OR
//Murat'ın ehliyeti var OR Murat gözlük kullanıyor

//NOT
// !A // true--->false, false--->true verir.


// örn--------
//yaş=16
//A. yaşın 20'den büyük veya eşit olması //false
//B. yaşın 30'dan az olması // true

//!A false--->true 
//A AND B---->false
//A OR B ----> true

//!A AND B --->true

//A OR !B ---->false


//not öncelik sahibidir.


// const ehliyetVarMi = true //A

// const gorusuVarMi = true //B falsedu true cevirdim alt ornek için

// const yorgunMu = true //C
// console.log(ehliyetVarMi || gorusuVarMi || yorgunMu) //true
// console.log(ehliyetVarMi && gorusuVarMi && yorgunMu) //false



// console.log(ehliyetVarMi && gorusuVarMi) //false
// console.log(ehliyetVarMi || gorusuVarMi) //true
// console.log(!ehliyetVarMi) //false

// const kullanabilirMi = ehliyetVarMi && gorusuVarMi

// // if(kullanabilirMi) {
// //     console.log("Murat arac kullanabilir")
// // } else {
// //     console.log("Murat arac kullanamaz")
// // }

// if(kullanabilirMi && gorusuVarMi && !yorgunMu) {
//     console.log("Murat arac kullanabilir")
// } else {
//     console.log("Murat arac kullanamaz")
// }


// ------------------------örnek start-----------

// const ulke = 'Türkiye'
// // console.log(typeof ulke)
// //    ulke = "Avrupa"; // HATA VERECEKTİR.
// const kita = 'Asya'
// // console.log(typeof kita);
// let nufus = 14
// // console.log(typeof nufus);
// let dil
// // console.log(typeof dil);
// dil = 'ingilizce'
// // console.log(dil);
// let adaMi = true
// // console.log(typeof adaMi);
// // console.log(adaMi);


// // if(dil==="ingilizce" && 50>nufus && !adaMi) {
// //     console.log("Turkiye'de yasamalısınız :)")
// // } else {
// //     console.log("Turkiye kriterlerinizi karsilamiyor")
// // } //false

// if(dil==="ingilizce" && 50>nufus && adaMi) {
//     console.log("Turkiye'de yasamalisiniz :)")
// } else {
//     console.log("Turkiye kriterlerinizi karsilamiyor")
// } //dil ingilizce değiştirdim adamı değiştirdim ve true yakaladım.

// ------------------------örnek end-----------

// --------------Boolean Logic SON------------