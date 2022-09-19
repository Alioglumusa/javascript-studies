// //Challenge
// Bu Codepen'in JS bölümünde şu koşulu kontrol eden bir if ifadesi yazalım: firstWord değişkeni secondWord değişkenine eşit mi?

// Cevap evet ise message değişkenini "aynı" dizesine ayarlayın.
// Hayır ise firstWord'ün secondWord'den daha uzun olup olmadığını kontrol edin. (daha uzun - metnin harf uzunluğu anlamına gelir)
// Evet ise message değişkenini "uzun" dizesine ayarlayın.
// Aksi takdirde (else) message değişkenini "kısa" olarak ayarlayın

const firstWord = "peony";
const secondWord = "daffodil";
let message = "";

if(firstWord === secondWord) {
    message = "Ayni"
} else if(firstWord.length > secondWord.length){
    message = "Uzun"
} else{
    message = "Kisa"
}

console.log(message);

