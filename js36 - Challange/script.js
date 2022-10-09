
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
