
// ----------------------------------------------
// --------------------------------
// -----------------------------------------------
// 08.10.2022 cumartesi
// ----------------------------------
// ------------------------------------------------


//------------Intro To Object Başlangıç------------
// const musaDizisi = [
//     "Musa",
//     "Alioglu",
//     2040 - 1997,
//     "Mühendis",
//     ["Kerem", "Tunahan", "Bora"]
// ]

// const musa = {
//     adı: "Musa",
//     soyadı: "Alioglu",
//     yaş: 2040 - 1997,
//     iş: "Mühendis",
//     arkadaşlar: ["Kerem", "Tunahan", "Bora"],
// }
// **nesnelerde değerlerin sıra geri almak istediğimizde önemli değil

//egzersiz---
// const ülkem = {
//     ülke: "Türkiye",
//     başkent: "Ankara",
//     dil: "Türkçe",
//     nüfus: 88,
//     komşular: ["Gürcistan", "Bulgaristan"],
// }
//---


// const araba = {
//     marka: "BMW",
//     model: "M5",
//     enYüksekHız: 350,
//     beygirGücü: 200,
//     renkSeçenekleri: ["Siyah", "Kırmızı", "Metalik"]
// }

// const arkadaş = ["engin1", "eda"]
// const musaArray = ["samet", arkadaş]
// arkadaş.push("burcu")
// console.log(arkadaş);
// musaArray[1].push("Burcu");
// console.log(musaArray);


//Dizi Yapılandırması Array Destructure
//-iç içe dizileri parçalama

// const testArray = [10, 20, 30, 40, [41, 42, 43, 44]]
    
// [a, b, c, d, e] = testArray
//a eşit oldu a=10,  b=20 oldu vs.
    // [f, g, h, i] = e 
//f = 41 oldu, g = 42 oldu
   
// [,,,, h] = testArray
// h
//--> (4) [41,42,43,44]
// [, i] = j
//---> 42


// [,,,, [, j]] = testArray
// j //---> 42

// console.log(testArray[4]) //--> (5) [10, 20, 30, 40, Array(4)]
// j ---> 42

// let içeridekiArray = testArray[4]
// --->undefined
// içeridekiArray[1]
// ---->42



//-------
// const musa = {
//     adı: "Musa",
//     soyadı: "Alioglu",
//     yaş: 2040 - 1997,
//     iş: "Mühendis",
//     arkadaşlar: ["Kerem", "Tunahan", "Bora"],
// }

// console.log(musa);
// console.log(musa.soyadı);  //---> .nesne ile direkt yazdırdık
// console.log(musa["soyadı"]);

// const isim = "adı" 
// console.log(musa["soy"+isim]); //---> soyad = Alioglu yazdı

// console.log(murat."soy" + isim); //---> hata

// prompt("Musa hakkında ne bilmek istiyorsun ad,soyad,arkadaşlar arasında seçim yapın")
//---> dönen string olucak, saklıycaz bunu
// const ilgili = prompt("Musa hakkında ne bilmek istiyorsun ad,soyad,arkadaşlar,iş arasında seçim yapın")
// console.log(musa.ilgili);  //----> undefined

// console.log(musa[ilgili]); //--> adı girdim-> Musa yazdı vs.

// if (musa[ilgili]) {
//     console.log(musa[ilgili]);
// } else {
//     console.log("Yanlış istek. Ad,Soyad,Yaş,İş ve Arkadaşlar arasından seçim yapın.");
// }

// musa.konum = "Kadıöy"
// musa["twitter"] = "@musa"
// console.log(musa);
//-------


//-------challange start----
// const musa = {
//     adı: "Musa",
//     soyadı: "Alioglu",
//     yaş: 2040 - 1997,
//     iş: "Mühendis",
//     arkadaşlar: ["Kerem", "Tunahan", "Bora"],
// }
//-->Musa'nın üç arkadaşı var ve en iyi arkadaşının adı Tunahan'dır.
// console.log(`${musa.adı}'nın ${musa.arkadaşlar.length} arkadaşı var ve en iyi arkadaşının adı ${musa.arkadaşlar[1]}'dır. `);
//-------challange end----


//-------challange start----
// const ülkem = {
//     ülke: "Türkiye",
//     başkent: "Ankara",
//     dil: "Türkçe",
//     nüfus: 88,
//     komşular: ["Gürcistan", "Bulgaristan"],
// }
// console.log(`${ülkem.ülke}'de ${ülkem.nüfus} milyon Türkçe konuşan insan,  ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var.`);
// console.log(`${ülkem.ülke}'de ${ülkem.nüfus += 2} milyon Türkçe konuşan insan,  ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var.`);
// console.log(`${ülkem.ülke}'de ${ülkem["nüfus"] -= 2} milyon Türkçe konuşan insan,  ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var.`);

// ülkem.nüfus += 2
// console.log(ülkem.nüfus);

// ülkem["nüfus"] -= 2
// console.log(ülkem.nüfus);
// -------challange end----


//----Örnek Başlangıç----
// const obj = {
//     a: 1
// }

// const a = "a"
// const b = "b"

// console.log(obj.a);  //---> Nesneyi işaret ediyoruz
// console.log(obj["a"]); //---> Nesneyi işaret ediyoruz
// console.log(obj[a]); //---> Değişkende saklanan değeri okur "a" === obj[a]
// console.log(obj[b]); //---> Undefined --> obj["b"] === obj[b]
// console.log(obj[abc]); //---> Hata error "abc" diye bir değişken yok



//---Object Destructure---
// const restaurant = {
//   isim: 'İtalyan Pizza',
//   konum: 'Kadıköy BilgeAdam',
//   kategoriler: ['İtalyan', 'Mantarlı', 'Peynirli', 'Organik'],
//   açılışSaati: {
//     perşembe: {
//       açık: 12,
//       kapalı: 22,
//     },
//     cuma: {
//       açık: 11,
//       kapalı: 23,
//     },
//     cumartesi: {
//       açık: 0, // 24 saat açık
//       kapalı: 24,
//     },
//   },
// }


// const {
//     isim: lokantaİsmi,
//     açılışSaati: saatler,
//     kategoriler: çeşitler
// } = restaurant //isimleri dğeiştirdik

// const { bulunmayanÖzellik = "Bu yeni olmalı" } = restaurant //ekledik

// let a = 10
// let b = 20
// a = 30
// b = 40

// let a = 111
// let b = 999
// const nesne = {a: 23, b: 7, c: 14, d: 50}

// ({ a, b }) = nesne



// const { cuma: friday } = saatler
// const {açık, kapalı} = friday


//-----
// const musa = {
//     adı: "Musa",
//     soyadı: "Alioglu",
//     doğumYılı: 1997,
//     iş: "Mühendis",
//     arkadaşlar: ["Kerem", "Tunahan", "Bora"],
//     ehliyetiVarMı: true,

    // yaşHesap: function (doğumYılı) {
    //     return 2040 - doğumYılı
    // },

    // yaşHesap: function () {
    //         console.log(this); //musa nesnesi this
    //     return 2040 - this.doğumYılı

//         yaşHesap: function () {
//         this.yaş = 2040 - this.doğumYılı
//         return this.yaş
//     },
// }

// console.log(musa.yaşHesap(1997));
// console.log(musa["yaşHesap"](1997));  //----> "" işareti ve [] dışına yazılması dikakt edilmesi gerekir.
// console.log(musa.yaşHesap(musa.doğumYılı)); //---> 43

// console.log(musa.yaş);  //---> undefined, henüz oluşturulamadı
// console.log(musa.yaşHesap()); //--> fonk çağırıldı alttaki kod çalışır.
// console.log(musa.yaş);  //---> ilk önce fonksiyonu 1 kere çağırmamız lazım çalışması için.
// console.log(musa.yaşHesap()); 

//.this = musa ya eşit , .this kullanılır isim değişince oluşacak problemlere karşı
// depolama için kullanabiliriz
//----


//---Challange Start---
// const musa = {
//     adı: "Musa",
//     soyadı: "Alioglu",
//     doğumYılı: 1997,
//     iş: "Mühendis",
//     arkadaşlar: ["Kerem", "Tunahan", "Bora"],
//     ehliyetiVarMı: true,
//       yaşHesap: function () {
//         this.yaş = 2040 - this.doğumYılı
//         return this.yaş
//     },
    
//     özet: function () {
//           return `${this.adı} ${this.yaş} yaşında ${this.iş} ve ehliyeti ${this.ehliyetiVarMı ? "var" : "yok"}`
//       }
// }

// Musa 24 yaşında mühendistir ve ehliyeti var yazalım.
// console.log(musa.yaşHesap()); //--> this.yaş çalışması için yukarda 1 kere çağırdık.
// console.log(musa.özet());
// arkadaşlar.push(23)
//---Challange End---
    


//---Challange Start---
// const ülkem = {
//     ülke: "Türkiye",
//     başkent: "Ankara",
//     dil: "Türkçe",
//     nüfus: 88,
//     komşular: ["Gürcistan", "Bulgaristan"],
    

//     açıklama: function () {
//         return `${this.komşular}`
//     },

//     adaKontrol: function () {
//         this.adaMı = this.komşular.length === 0 ? true : false
//         return this.adaMı
//     },
// }

// console.log(ülkem.açıklama());
// console.log(ülkem.adaKontrol());
// console.log(`${ülkem.ülke}'de ${ülkem.nüfus} milyon Türkçe konuşan insan,  ${ülkem.komşular.length} komşu ülkesi ve ${ülkem.başkent} adında bir başkenti var. Ada ülkesi tanımı: ${ülkem.adaMı}.`);
//---Challange End---

//------------Intro To Object Bitiş----------------
 
// ----------------09.10.2022  PAZAR ------------
//-----------------------------------------------

//--challange Start----------------------------------------------------------
// const isim1 = "Murat";
// const isim2 = "Namık";
// const namıkKg = 92;
// const muratBoy = 1.87;
// const muratKg = 71;
// const namıkBoy = 1.95;

// const muratBmı = muratKg / muratBoy ** 2;
// const namıkBmı = namıkKg / namıkBoy ** 2;

// const büyükBmı = muratBmı > namıkBmı;
// console.log(muratBmı, namıkBmı, büyükBmı);
// // BMI = Ağırlık / boy** 2 
// if (muratBmı > namıkBmı) {
//     console.log(`Murat'ın BMI'si ${muratBmı} Namık'ınkinden ${namıkBmı}, daha yüksek`)
// } else {
//     console.log(`Namık'ın BMI'si ${namıkBmı} Murat'ınkinden ${muratBmı}, daha yüksek`)
// }


//yol1
// const bmı = {
//     isim1: "Murat",
//     isim2: "Namık",
//     namıkKg: 92,
//     muratBoy: 1.87,
//     muratKg: 71,
//     namıkBoy: 1.95,

//     bmıHesaplama: function () {
//         this.bmıHesap1 = this.muratKg / this.muratBoy ** 2
//         this.bmıHesap2 = this.namıkKg / this.namıkBoy ** 2
//         return [this.bmıHesap1, this.bmıHesap2]
//      },

//     bmıKontrol: function () {
//         this.kontrol = this.bmıHesap1 > this.bmıHesap2
//             ? `Murat'ın BMI'si ${this.bmıHesap1} Namık'ınkinden ${this.bmıHesap2}, daha yüksek`
//             : `Namık'ın BMI'si ${this.bmıHesap2} Murat'ınkinden ${this.bmıHesap1}, daha yüksek`
//         return this.kontrol
//     }

// }

// console.log(bmı.bmıHesaplama());
// console.log(bmı.bmıKontrol());
//yol1


//yol2
// const musa = {
//     tamAdı: "Musa Alioğlu",
//     kilo: 50,
//     boy: 1.69,
//     BMIHesap: function () {
//         this.bmi = this.kilo / this.boy ** 2
//         return this.bmi
//     },
// }
// musa.BMIHesap();
// console.log(musa.bmi);

// const namık = {
//     tamAdı: "Namık Kemal",
//     kilo: 92,
//     boy: 1.95,
//     BMIHesap: function () {
//         this.bmi = this.kilo / this.boy ** 2
//         return this.bmi
//     },
// }
// namık.BMIHesap();
// console.log(Number(namık.bmi.toFixed(2)));


// if (musa.bmi > namık.bmi) {
//     console.log(`${musa.tamAdı} 'ın BMI (${musa.bmi}) ${namık.tamAdı} 'ın BMI (${namık.bmi}'ından büyüktür.) `);
// } else if (namık.bmi > musa.bmi) {
//     console.log(`${namık.tamAdı} 'ın BMI (${namık.bmi}) ${musa.tamAdı} 'ın BMI (${musa.bmi}'ından büyüktür.) `);
// } 
//yol2-----

//3----
// console.log(`${musa.tamAdı} 'ın BMI (${musa.bmi}) ${musa.bmi > namık.bmi ? "büyük" : "küçük"} 
// ${namık.tamAdı} 'ın BMI (${namık.bmi})`
// );

//arrow func this anahtar kelimesi çalışmaz, 
//toFixed --> sonda ki sayı sabit
//3----

//--challange End-------------------------------------------------------------------------




//-------------------FOR
// console.log("ağırlık kaldırmak 1.tekrar");
// console.log("ağırlık kaldırmak 2.tekrar");
// console.log("ağırlık kaldırmak 3.tekrar");
// console.log("ağırlık kaldırmak 4.tekrar");
// console.log("ağırlık kaldırmak 5.tekrar");
// console.log("ağırlık kaldırmak 6.tekrar");
// console.log("ağırlık kaldırmak 7.tekrar");
// console.log("ağırlık kaldırmak 8.tekrar");
// console.log("ağırlık kaldırmak 9.tekrar");
// console.log("ağırlık kaldırmak 10.tekrar");


//-döngü ile tek seferde döndürebiliriz
//-Koşul doğru iken fır döngüsü çalışmaya devam eder.
// for (let tekrar = 1; tekrar <= 10; tekrar++){
//     console.log(`"ağırlık kaldırmak ${tekrar}.tekrar"`);
// }
    

//challange start-----------
//Amacınız 1'den 10'a kadar bir tamsayı olan sayı için çarpım tablosunu döndürmektir.
//Örneğin, sayı == 5 için bir çarpım tablosu (string) aşağıdaki gibi görünür:
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
//P. S. sonraki satıra atlamak için Dizede \n kullanabilirsiniz
//---------->

// function çarpımTablosu() {
//     let str = " " 
//     for (let input = 1; input <= 10; input++){
//         str += `${input} * 5 = ${input * 5}\n` // asıl işlem sağ taraf
//     }
//     return str
// }
// console.log(çarpımTablosu());
//challange end-----------


//---For Döngüsü Challange----
//Ülkenizde seçim var. Küçük bir köyde sadece 50 seçmen var, 50 kişinin oy vermesini simüle etmek için bunun gibi bir dizede konsola for döngüsü ile yazalım.
// for (let oy = 1; oy <= 50; oy++){
//     console.log(`${oy}. seçmen şuan oy kullanıyor.\n`) 
// }


//--arraylerde loop---------------------------------------
// const musaDizisi = [
//     "Musa",
//     "Alioglu",
//     2040 - 1997,
//     "Mühendis",
//     ["Kerem", "Tunahan", "Bora"],
//     true,
// ]

// const türler = []
// console.log(musaDizisi[0]);
// console.log(musaDizisi[1]);
// console.log(musaDizisi[2]);
// console.log(musaDizisi[3]);
// console.log(musaDizisi[4]);

// for (let i = 0; i < musaDizisi.length; i++){
//     console.log(musaDizisi[i], typeof musaDizisi[i]);
    // türler[i] = typeof musaDizisi[i] // türler dizisini doldurmak
//     türler.push(typeof musaDizisi[i])
// }

// console.log(türler);
// uzunluğu 5  ancak dizide 0 dan başlar , i<= verirsem 0,1,2,3,4,5.=undefined verir
//---


// const yıllar = [1975, 1986, 2000, 2004]
// const yaşlar = []

// for (let i = 0; i < yıllar.length; i++){
//    yaşlar.push( 2040 - yıllar[i])
// }
// console.log(yaşlar);


//---continue & break----------
// const musaDizisi = [
//     "Musa",
//     "Alioglu",
//     2040 - 1997,
//     "Mühendis",
//     ["Kerem", "Tunahan", "Bora"],
//     true,
// ]
// const türler = []

// console.log("----Sadece Stringler Continue-----")
// for (let i = 0; i < musaDizisi.length; i++){
//     if(typeof musaDizisi[i] !== "string") continue
//     console.log(musaDizisi[i], typeof musaDizisi[i]);
// }

// console.log("----Number Break Stringler-----")
// for (let i = 0; i < musaDizisi.length; i++){
//     if(typeof musaDizisi[i] === "string") break
//     console.log(musaDizisi[i], typeof musaDizisi[i]);
// }
//-------------------------------------------------------



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





