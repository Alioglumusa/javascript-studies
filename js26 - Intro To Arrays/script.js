
//------------Intro To Arrays Başlangıç------------

// const arkadaş1 = "Namık"
// const arkadaş2 = "Musa"
// const arkadaş3 = "Murat"

// const arkadaş = ["Namık", "Musa", "Murat"]
// console.log(arkadaş);

// const yıl = new Array(1986, 1999, 2002, 2012, 2022)


//------------Intro To Arrays Bitiş------------



//--------------PAZAR 02.10.2022-------------------

//------------Intro To Arrays Başlangıç------------

// const arkadaş1 = "Namık"
// const arkadaş2 = "Musa"
// const arkadaş3 = "Murat"

// const arkadaş = ["Namık", "Musa", "Murat"]
// console.log(arkadaş);
// console.log(arkadaş[0]); //--->0 Namık, 1 Musa, 2 Murat (0 tabanlı çağırır)
// console.log(arkadaş.length); //---> uzunluk , miktar (0 tabanlı değil 3 çıkar)
// console.log(arkadaş[arkadaş.length -1]); //--> uzunluk 3 olan string -1 ile rakama çevrildi 2 oldu 0,1,2.de olan yazıldı yani Murat

// string önüne + koyarsak numbera zorlar
//[] içine statement koyamayız ";"
//diziye elementler eklemek içinde kullanırız []

// arkadaş[2] = "Ayşe" //--->2 numaralı yerdeki değişti
// console.log(arkadaş); //---> yazdıık ve sonuç Namık Musa Ayşe oldu.

// arkadaş = ["Sema", "Ali"] // TypeError hata alırız sabit değişkene atama yapamıyoruz

// const isim = "Musa"
// const musa = [isim, "Alioğlu", 2040 - 1997, "Mühendis", arkadaş]
// console.log(musa);
// console.log(musa.length); //----> 5

//----
// const yaşHesap = function (doğumYılı) {
//         return 2040 - doğumYılı
// }

// const yıllar = [1986, 1967, 2002, 2010, 2018]

// console.log(yaşHesap(yıllar)) //---> NaN çalışmaz yıllar dizi argüman olarak geçer,parametreye uymadı, doğum yılı tek değer bekler
// yıllar + 10  //-----> 201810 en sonuncusu, + operatörü dizeye çevirdi "string"

// yıllar - 10 //---> NaN

// const yaş1 = yaşHesap(yıllar[0])
// const yaş2 = yaşHesap(yıllar[1])
// const yaş3 = yaşHesap(yıllar[yıllar.length -1])  //--> sonuncu
// console.log(yaş1,yaş2,yaş3);


// const yaşlar = [yaşHesap(yıllar[0]),
//         yaşHesap(yıllar[1]),
//         yaşHesap(yıllar[yıllar.length - 1])] //--> dizide fonksiyon çağrılarını yapabiliriz
// console.log(yaşlar);


// const yeniVar = [1, 2, 3, 4]
// yeniVar = 6 //---> olmaz

// const arr = [1, 2, 3]
// arr = "Merhaba" //---> olmaz
// arr.push(4) //---> push ekleme arr 'a 4 ü ekle sonuna - mutasyon

// const yıl = new Array(1986, 1999, 2002, 2012, 2022)

