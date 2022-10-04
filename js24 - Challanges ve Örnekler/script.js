
//---Challange Start--
// function dünyanınYüzdesi1(popülasyon) {
//     const popülasyonDegeri = (popülasyon / 7900) * 100
//     return popülasyonDegeri
// }

// const nüfusuTanımla = (ülke, nüfus)=> {
//     const dünyaNüfusu = dünyanınYüzdesi1(nüfus)
//     return  `${ülke} ' de ${nüfus} milyon insan var, ki buda dünyanın yaklaşık ${dünyaNüfusu}'sidir`
// }

// console.log(nüfusuTanımla("Çinde", 100));
//---Challange End--


//--2.yol başlangıç------
// const dünyanınYüzdesi3 = (popülasyon) => (popülasyon / 7900) * 3

// const nüfusuTanımla = function (ülke, nüfus) {
//     const yüzdesi = dünyanınYüzdesi3(nüfus)
//     const açıklama = `${ülke} ' de ${nüfus} milyon insan var, ki buda dünyanın yaklaşık  % ${yüzdesi}'sidir`
//     console.log(açıklama)
// }

// nüfusuTanımla("Çin",1441)
// nüfusuTanımla("ABD",350)
//--2.yol son-----


//------------
// const yaşHesap = function (doğumYılı) {
//     return 2040 - doğumYılı
// }

// const emekliliğeKalanSüre = function (doğumYılı, ad)  {
//     const yaş = yaşHesap(doğumYılı)
//     const emeklilik = 60 - yaş
//     if (emeklilik > 0) {
//         console.log(😊);
//         return emeklilik
//     } else {
//         console.log(⭐);
//         return -1 //-1 yok demek
//     }
//     // return `${ad} ${emeklilik} yıl içinde emekli oluyor`
// }

// console.log(emekliliğeKalanSüre(1986,"Musa"));
// console.log(emekliliğeKalanSüre(1970,"Namık"));


//-----
// const yaşHesap = function (doğumYılı) {
//     return 2040 - doğumYılı
// }

// const emekliliğeKalanSüre = function (doğumYılı, ad) {
//     const emeklilik = 60 - (2022 - doğumYılı)
//     return `Sayın ${ad},${emeklilik > 0
//         ? `${emeklilik} yıl içerisinde oluyor`
//         : `${emeklilik * -1} yıldır zaten emeklisiniz`}`
// }

// console.log(emekliliğeKalanSüre(1986,"Musa"));
// console.log(emekliliğeKalanSüre(1970,"Namık"));
//----


//-----
// const yaş1 = yaşHesap1(1986)

// function yaşHesap1(doğumYılı) {
//     console.log();
//     return 2060 - doğumYılı
// }

//-----
// let a = 5
// function bizimFunc(sonuç) {
//     console.log(sonuç);
// }

// bizimFunc(a > 2 ? "büyük" : "küçük")


//----
// const matHesap = function (sayı1, sayı2) {
//     const birinci = sayı1 * 10
//     const ikinci = sayı2 * 20
//     return [ikinci, birinci]
// }

// console.log(matHesap(5,7));


//----------Challange start (eksik!bende)-------
// const kaplanlarPuan1 = 96
// const kaplanlarPuan2 = 108
// const kaplanlarPuan3 = 89

// const kobralarPuan1 = 200
// const kobralarPuan2 = 200
// const kobralarPuan3 = 200

// const ortalamaHesabı = (sayı1,sayı2,sayı3) => (sayı1 + sayı2 + sayı3 ) / 3
// const kazananKim = (ortKaplanlar, ortKobralar) => `${ortKaplanlar > ortKobralar ? "Kaplanlar Kazandı" : "Kobralar Kazandı"}`

// const ortalamaKaplanlar = ortalamaHesabı(kaplanlarPuan1,kaplanlarPuan2,kaplanlarPuan3)
// const ortalamaKobralar = ortalamaHesabı(kobralarPuan1,kobralarPuan2,kobralarPuan3)

// console.log(kazananKim(ortalamaKaplanlar,ortalamaKobralar));
//----------Challange end -------
