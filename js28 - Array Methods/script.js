
//Array Methods
//push      ----> sona ekler
//unshift   ----> başa ekler
//shift     ----> ilk değer kaldır
//pop       ----> son değer kaldır
//indexOf   ----> bulunduğu konum
//includes  ----> tur false içerir mi


//push
// const arkadaş = ["Namık", "Musa", "Murat"]
// const yeniUzunluk = arkadaş.push("Ayşe")
// console.log(arkadaş); //---> "Ayşe" eklendi, lenght 4
// console.log(yeniUzunluk); //--> 4

//unshift
// arkadaş.unshift("Yavuz") //--> başa ekler, uzunluk 1 arttı
// console.log(arkadaş);

//Element Kaldırma

//pop
// arkadaş.pop() //--> son ögeyi kaldırır
// const kaldırılanElement = arkadaş.pop()
// console.log(kaldırılanElement);
// console.log(arkadaş);

//shift
// arkadaş.shift() //--> ilk değeri kaldırır
// console.log(arkadaş);

//indexOf
// console.log(arkadaş.indexOf("Murat")); //---> bulunduğu konum
// console.log(arkadaş.indexOf("Fatih")); //---> -1 gelir yok

//includes --içerir mi ?-- true , false verir
// console.log(arkadaş.includes("Murat")); //--> true
// console.log(arkadaş.includes("Fatih")); //--> false
// console.log(arkadaş.includes("murat")); //--> false , === kullanır

// if (arkadaş.includes("Fatih")) {
//         console.log("Fatih burada");
// } else {
//         console.log("Fatih yok");
// }



//-----challange start-----
// const komşular = ["ukrayna","rusya","amerika"]
// const yeniKomşu = komşular.push("Ütopya")
// console.log(yeniKomşu);
// console.log(komşular);

// const komşuGitti = komşular.pop()
// console.log(komşuGitti);
// console.log(komşular);

// if (!komşular.includes("Almanya")) {
//          console.log("Muhtemelen bir orta Avrupa ülkesi değil");
// }

// const değiştir = komşular.indexOf("İsveç")
// if  (komşular.includes("ukrayna")) {
//         console.log(komşular[ komşular.indexOf("ukrayna")]);
// }

// komşular[komşular.indexOf("ukrayna")] = "Ukrayna Cumhuriyeti"
// console.log(komşular);
//-----challange end-----



