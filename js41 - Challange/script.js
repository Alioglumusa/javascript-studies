
//-----Challange Start----

//kendi çözümüm
// const fatura = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const bahşişler = []
// const toplamlar = []

// const bahşişHesap = function (fatura) {
//     return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }
    

//     for (let i = 0; i < fatura.length; i++){
//         bahşişler.push(bahşişHesap(fatura[i])) 
//         toplamlar.push([fatura[i] + bahşişler[i]]) 
//         console.log(toplamlar[i]);
//     }
        
// const ortHesap = (arr) => {
//     let toplam = 0;
//     for (let i = 0; i < arr.length; i++){
//         toplam += arr[i]
//     }
//     return toplam / arr.length
// }

// console.log(${ortHesap(toplamlar)});

// derste çözülen
// const bahşişHesap = function (fatura) {
//     return fatura >= 50 && fatura <= 300 ? fatura * 0.15 : fatura * 0.2
// }

// const fatura = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const bahşişler = []
// const toplamlar = []


// for (let i = 0; i < fatura.length; i++){
//     const bahşiş = bahşişHesap(fatura[i])
//     bahşişler.push(bahşiş)
//     toplamlar.push(bahşiş + fatura[i])
// }
// // console.log(fatura, bahşişler, toplamlar);


// const ortHesap = function (arr) {
//     let toplam = 0
//     for (let i = 0; i < arr.length; i++){
//         toplam += arr[i] // -->toplam = toplam + arr[i] 
//     }
//     // console.log(toplam);
//     return toplam / arr.length
// }

// console.log(ortHesap(toplamlar));
// console.log(ortHesap(bahşişler));
//-----Challange End----