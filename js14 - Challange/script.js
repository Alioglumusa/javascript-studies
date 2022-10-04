"use strict"

// ------------------------örnek start js temelleri - bölüm-1 kodlama-27-----------

const kaplanlarPuan1 = 96
const kaplanlarPuan2 = 108
const kaplanlarPuan3 = 89
const kaplanlarOrtalama = (kaplanlarPuan1 + kaplanlarPuan2 + kaplanlarPuan3) / 3
console.log(`${kaplanlarOrtalama} kaplanlar ortalama`)

const kobralarPuan1 = 88
const kobralarPuan2 = 91
const kobralarPuan3 = 110
const kobralarOrtalama = (kobralarPuan1 + kobralarPuan2 + kobralarPuan3) / 3
console.log(`${kobralarOrtalama} kobralar ortalama`)


if (kaplanlarOrtalama > kobralarOrtalama && kaplanlarOrtalama>100) {
    console.log('Kaplanlar kazandi.')
  } else if (kobralarOrtalama > kaplanlarOrtalama && kobralarOrtalama>100 ) {
    console.log(`Kobralar kazandi`)
  } else if (kaplanlarOrtalama === kobralarOrtalama && kaplanlarOrtalama>100 && kaplanlarOrtalama>100) {
    console.log(`Berabere`)
  } else console.log(`100 puan baraji gecilemedi.`)

// basit ifadelerde switch case , case kısmı true false boolean
switch (kaplanlarOrtalama > kobralarOrtalama && kaplanlarOrtalama>100){
    case true:
        console.log(`Kaplanlar kazandı`)
        break
    case false:
        console.log(`Kobralar kazandı`)
        break
    default:
    break
}


//Kaplan/Kobra Challenge Switch Başlangıç-------------//
// const kaplanlarSkor = (97 + 112 + 80) / 3;
// const kobralarSkor = (109 + 95 + 50) / 3;
//  let winner
//  if(kaplanlarSkor > kobralarSkor && kaplanlarSkor >= 100){
//     winner = "kaplan"
//  } else if (kaplanlarSkor < kobralarSkor && kaplanlarSkor >= 100){
//     winner = "kobra"
//  } else if (kaplanlar === kobralarSkor && kaplanlarSkor >= 100){
//     winner = "her ikisi de"
//  }

// switch(winner){
//     case"kaplan"
//      console.log(`Kaplanar kazandı`):
//      break
//     case"kobra"
//      console.log(`Kobralar kazandı`):
//      break
//     case"both"
//      console.log(`Her ikiside kazandı`):
//      break

// }
//Kaplan/Kobra Challenge Switch Bitiş-------------//






