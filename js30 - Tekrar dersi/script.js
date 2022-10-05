//----05.10.2022 tekrar dersi ----
// function logger() {
//     console.log("musa");
// }

// logger()
// logger()
// logger()


//---
// function meyveİşleme(elmaSayısı, portakalSayısı) {
//     console.log(elmaSayısı, portakalSayısı)
//     const meyveSuyu = `${elmaSayısı} elma ve ${portakalSayısı} portakal`
//     return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(8, 2)

// console.log(elmaSuyu);


//---
// const num = Number("23")
// console.log(num);

// const num2 = String(23)
// console.log(num2)



//---Dec
// function yaşHesap(doğumYılı) {
//     const yaş = 2040 - doğumYılı
//     return yaş
// }

// const yaş1 = yaşHesap(2002)
// console.log(yaş1);


//---Expression
// const yaşHesap2 = function (doğumYılı) {
//     return 2040 - doğumYılı
// }

// const yaş2 = yaşHesap2(2012)
// console.log(yaş1,yaş2);


//---arrow function
// const yaşHesap3 = (doğumYılı) => 2040 - doğumYılı

// const yaş3 = yaşHesap3(2030)
// console.log(yaş3);


//---
// const emekliliğeKalanSüre = (doğumYılı) => {
//     const yaş = 2040 - doğumYılı
//     const emekli = 65 - yaş
//     return `${emekli} kadar yıl kaldı`
// }

// console.log(emekliliğeKalanSüre(1999));



//---
// 0,1,1,2,3,5,6,13,21..
// let fib = n => n === 0 ? 0 : (n === 1 ? 1 : fib(n-1) + fib(n-2))
 
//     fib(3)



//---
// function meyveParçalama(meyve) {
//     return meyve * 4
// }

// function meyveİşleme(elmaSayısı, portakalSayısı) {
//     const elmaParçaları = meyveParçalama(elmaSayısı)
//     const meyveSuyu = `${elmaParçaları} elma ve ${portakalSayısı} portakal`
//     return meyveSuyu
// }

// const elmaSuyu = meyveİşleme(8,2)
// console.log(elmaSuyu);



//---
// const emekliliğeKalanSüre = (doğumYılı,isim) => {
//     const yaş = 2040 - doğumYılı
//     const emekli = 65 - yaş
//     if (emekli > 0) {
//         return emekli
//     } else {
//         return -1
//     }
    
// }

// console.log(emekliliğeKalanSüre(1999,"Musa"));
// console.log(emekliliğeKalanSüre(1000,"Namık"));



//---array
// const arkadaş1 = "Musa"
// const arkadaş2 = "Namık"
// const arkadaş3 = "Eda"
// const arkadaş4 = "Engin"
// const arkadaş5 = "Murat"

// const arkadaş = ["Musa", "Namık", "Eda", "Engin", "Murat"]
// console.log(arkadaş);
// console.log(arkadaş[0]);
// console.log(arkadaş.length, arkadaş[arkadaş.length -1]); //arkadaş.lenght -1 sonuncuyu çağırır


// arkadaş[2] = "Kerem"
// console.log(arkadaş);


//---
// const yıllar = [1986, 1222, 1213, 1414, 1515]
// console.log(yaşHesap(yıllar));
//arrayden bi sayı çıkmaz toplarsanda dize şeklinde yazar
// console.log(yaşHesap(yıllar[0]));


//---
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [3, 8, 6],
    [3, [4.1,4.2], 6],
]

console.log(arr[0][0]); //-->1. nin 1.si
console.log(arr[1][0]); //-->2. nin 1.si
console.log(arr[2][2]); //-->3. nin 3.si
console.log(arr[3][1][0]); //-->3. nin 3.si






