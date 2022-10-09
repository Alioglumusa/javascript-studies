
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
