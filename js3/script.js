// // // true;
// // // console.log(true);

// // // let jsHarika = true; 
// // // console.log(jsHarika);

// // // console.log(typeof true);
// // // console.log(typeof jsHarika);
// // // console.log(typeof true);
// // // console.log(typeof 36);
// // // console.log(typeof "Murat");

// // // jsHarika = "evet";
// // // console.log(typeof jsHarika);

// // // let year;
// // // console.log(year);
// // // console.log(typeof year);
// // //------------boş değer, undefined da tutuyor, tercih

// // // year = 1986;
// // // console.log(typeof year);

// // // console.log(typeof null);


// // // ----------------------örnek2 Start----------------------
// // // let adaMı = true;
// // // let country = "Italy";
// // // let population = 88;
// // // let language;

// // // console.log(typeof adaMı);
// // // console.log(typeof country);
// // // console.log(typeof population);
// // // console.log(typeof language);
// // // ----------------------örnek2 End----------------------


// // //--------------Değişken Bildirimi Başlangıç-------------
// // // let,const,var

// // // let age = 36;
// // // age = 37;
// // // let year

// // // const doğumYılı = 1997;
// // // doğumYılı = 1998; hata verir const değerleri değiştirilemez.

// // // const job;  
// // //hata verir, undefined yerine atmaz, değer lazım. 

// // // var job = "Mühendis";
// // // job = "Öğretmen";
// // // // var eski, değiştirilebilir, 

// // // lastName = "Akdağ";
// // // console.log(lastName);
// // //--------------Değişken Bildirimi Bitiş-------------------


// // // ----------------------örnek2 START----------------------
// // // let adaMı = true;
// // // const country = "Italy";
// // // let population = 88;
// // // let language;

// // // language = "Türkçe";

// // // console.log(typeof adaMı);
// // // console.log(typeof country);
// // // console.log(typeof population);
// // // console.log(typeof language);

// // // country = "Türkiye"; 
// // //-hata verir constlar ilk başta değer ister ve değiştirilemez
// // // ----------------------örnek2 END------------------------


// // // ----------------------Operatörler START----------------------
// // //Matematik İşlemleri------
// // const emeklilik = 2050
// // const yaşMusa = emeklilik - 1997 
// // const yaşNamık = emeklilik - 2000
// // console.log(yaşMusa,yaşNamık);
// // console.log(yaşMusa * 2,yaşMusa / 2, 2 ** 3);

// // const ad = "Musa"
// // const soyad =  "Alioğlu"

// // console.log(ad + " " + soyad);

// // //-----Atama İşlemleri------
// // let x = 10 + 5  //15
// // x += 10         // x = x + 10 = 25
// // x *= 4          // x = x * 4 = 100   
// // x ++            // x = x + 1 = 101
// // x --            // x = x - 1 = 100
// // console.log(x);

// // //----Karşılaştırma Operatörleri----
// // console.log(yaşMusa > yaşNamık); // <,<,>=,<=
// // // console.log(yaşMusa < yaşNamık);
// // console.log(yaşMusa >= 18);
// // console.log(emeklilik - 1986 > emeklilik - 2033);
// // const reşitMi = yaşMusa >= 18

// // // ----------------------Operatörler End------------------------


// // // ---------------------- örnek START------------------------
// let adaMı = true;
// const country = "Italy";
// let population = 88;
// let language;
// let continent = "Avrupa"

// language = "Türkçe";

// console.log(typeof adaMı);
// console.log(typeof country);
// console.log(typeof population);
// console.log(typeof language);


// console.log(population / 2);

// population++ 
// console.log(population);

// let finlandiya = 6;
// console.log(population > finlandiya);

// let ortNüfus = 33;
// console.log(population > ortNüfus);

// const description = country + continent + "da" + "ve" + population + "milyon" + "insan" + language + "konuşuyor"
// console.log("Portekiz" +" " + "Avrupa'da ve" + " " + "11 milyon insan portekizce konuşuyor");
// // // ---------------------- örnek END------------------------


// Operator precedence
const emeklilik = 2050
const yaşMusa = emeklilik - 1986
const yaşNamık = emeklilik - 2033
console.log(emeklilik - 1986 > emeklilik - 2033); // true-false


let x,y 

x = y = 35 - 10 - 5 // x = y = 20   SAĞDAN SOLA

console.log(x,y);
const ortalamaYaş = (yaşMusa + yaşNamık) / 2 //Parantez kullanımı
console.log(yaşMusa, yaşNamık, ortalamaYaş); //, ile yan yana ekledik gösterdik

























