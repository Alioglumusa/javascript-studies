// const adım = 'Murat'

// if (adım === 'Murat') {
//   console.log(`Murat ${iş}`)
//   const yaş = 2040 - 1986
//   console.log(yaş)
//   const iş = 'Öğretmen'
//   // console.log(x)
// }

//Değişkenlerde Kaldırma
// console.log(ben)
// console.log(iş)
// console.log(yıl)

var ben = 'Murat'
let iş = 'Öğretmen'
const yıl = 1986

//Fonksiyonlarda Kaldırma
// console.log(ekleme(2, 3))
// console.log(toplama(2, 3))
// console.log(birikim)
// console.log(birikim(2, 3))

function ekleme(a, b) {
  return a + b
}

const toplama = function (a, b) {
  return a + b
}

var birikim = (a, b) => a + b

//Örnek
// console.log(ürün)
if (!ürün) alışverişSepeti()

var ürün = 10

function alışverişSepeti() {
  // console.log('Bütün ürünler silindi')
}

var x = 1
let y = 2
const z = 3

// console.log(x === window.x)
// console.log(y === window.y)
// console.log(z === window.z)

// this = <Methodu çağıran nesne>

// const murat = {
//   isim: 'Murat',
//   yıl: 1986,
//   yaşHesap: function () {
//     console.log(this)
//     return 2040 - this.yıl
//   },
// }

// murat.yaşHesap() // 54

// this = undefined

console.log(this)

const yaşHesap = function (doğumYılı) {
  console.log(2040 - doğumYılı)
  console.log(this)
}

yaşHesap(1986)

const yaşHesapOk = (doğumYılı) => {
  console.log(2040 - doğumYılı)
  console.log(this)
}

yaşHesapOk(1986)

const murat = {
  yıl: 1986,
  yaşHesap: function () {
    console.log(this)
    console.log(2040 - this.yıl)
  },
}

// murat.yaşHesap()

const namık = {
  yıl: 2020,
}

namık.yaşHesap = murat.yaşHesap
namık.yaşHesap()

const f = murat.yaşHesap
f()
