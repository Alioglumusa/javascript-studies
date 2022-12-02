'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

///////////////////////////////////////

// function Kullanıcı(isim) {
//   // this = {} (üstü kapalı)
//   // bu nesneye yeni özellikler ekle
//   this.isim = isim
//   this.yöneticiMi = false
//   // return this; (üstü kapalı)
// }

// let kullanıcı = new Kullanıcı('Murat')

// let kullanıcı = {
//   isim: 'Murat',
//   yöneticiMi: false,
// }
// new Kullanıcı("Namık")
// new Kullanıcı("Eda")
// alert(kullanıcı.isim) //Murat
// alert(kullanıcı.yöneticiMi) //false

// let car = {
//  name: "Tofaş",
//  date: 2000,
//  color: "black"
// }

//Person Constructor
// function Person(name, yearOfBirth, job) {
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
//   this.calculateAge = function () {
//     return 2022 - this.yearOfBirth
//   }
// }

// let yiğit = new Person('Yiğit', 2009, 'student')
// let murat = new Person('Murat', 1986, 'teacher')

// console.log(yiğit)
// console.log(yiğit.name)
// console.log(yiğit.yearOfBirth)
// console.log(yiğit.job)
// console.log(yiğit.calculateAge())
// console.log('*******************')
// console.log(murat)
// console.log(murat.name)
// console.log(murat.yearOfBirth)
// console.log(murat.job)
// console.log(murat.calculateAge())

const request = new XMLHttpRequest()
request.open('GET', 'https://restcountries.com/v3.1/name/turkey')
request.send()
// console.log(request.responseText)
request.addEventListener('load', function () {
  // console.log(this.responseText)
  const [data] = JSON.parse(this.responseText)
  // const data = JSON.parse(this.responseText)[0]
  console.log(data)
})

// let personal = {
//   Adi: 'Murat',
//   Soyadi: 'Akdağ',
// }

// // let Adi = personal.Adi,
// //   Soyadi = personal.Soyadi
// // console.log(Adi, Soyadi)

// let { Adi: adı, Soyadi: soyadı } = personal
// console.log(adı, soyadı)

let personal = ['Murat', 'Engin', 'Berna']

// let p1 = personal[0]
// let p2 = personal[1]
// let p3 = personal[2]

let [p1, p2, p3] = personal
console.log(p1, p2, p3)
