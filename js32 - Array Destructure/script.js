
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

