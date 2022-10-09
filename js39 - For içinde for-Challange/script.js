
//----Challange Start----
// const popülasyon = [10, 144, 80, 123]
// const yüzdeler2 = []

// function dünyanınYüzdesi1(popülasyon) {
//     const popülasyonDegeri = (popülasyon / 7900) * 100
//     return popülasyonDegeri
// }

// for (let i = 0; i < popülasyon.length; i++){
//     yüzdeler2.push(dünyanınYüzdesi1(popülasyon[i]))
// }
// dünyanınYüzdesi1()
// console.log(yüzdeler2);
//----Challange End----


//---örnek---
// const birds = [
//     "Serçe",
//     "Martı",
//     30,
//     ["Doğan", "Şahin", "Kartal", "Atmaca", "Baykuş"],
// ]

// for (let i = 0; i < birds.length; i++){
//     if (typeof birds[i] === "object") {
//         console.log(birds[i]);
//     }
// }

//2.yol
// for (let i = 0; i < birds.length; i++){
//     if (Array.isArray(birds[i])) {
//         console.log(birds[i]);
//     }
// }


//-- tersten yazmak istersek
// const musaDizisi = [
//     "Musa",
//     "Alioglu",
//     2040 - 1997,
//     "Mühendis",
//     ["Kerem", "Tunahan", "Bora"],
// ]

// for (let i = musaDizisi.length - 1; i >= 0; i--){
//     console.log(musaDizisi[i]);
// }
//-----------    



//---for içinde for
// for (let egzersiz = 1; egzersiz < 4; egzersiz++){
//     console.log(`${egzersiz} numaralı egzersiz`);
//     for (let tekrar = 1; tekrar <= 6; tekrar++)
//         console.log(`Ağırlık kaldırma ${tekrar}`);
// }
//----------


//-----challange ----
// const komşularınListesi = [['Kanada', 'Meksika'], ['İspanya'], ['Norveç', 'İsveç','Rusya']]

// for (let i = 0; i < komşularınListesi.length; i++ ){
//     for (let y = 0; y < komşularınListesi[i].length; y++){
//         console.log(`Komşular: ${komşularınListesi[i][y]}`);
//     }
// }
//-----------------------





