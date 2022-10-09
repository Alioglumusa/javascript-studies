
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


