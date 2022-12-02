// const container = document.querySelector(".container");

// //Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const imageFile = document.createElement("img");
//     imageFile.src = imgPath;
//     imageFile.onload = () => {
//       resolve(imageFile);
//     };
//     imageFile.setAttribute("class", "images");
//   });
// };
// //console.log("selam");

// // const imgArr = ["./img/img-1.jpg", "./img/img-2.jpg", "./img/img-3.jpg"];

// // for (let i = 0; i < imgArr.length; i++) {
// //   createImage(imgArr[i]).then((data) => {
// //     console.log("yüklüyor...");
// //     wait(2).then(() => {
// //       container.append(data);
// //       console.log("Yüklendi...");
// //     });
// //   });
// // }

// wait(1)
//   .then(() => {
//     createImage("./img/img-1.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg = document.querySelector(".images");

//     myImg.style.display = "none";
//     createImage("./img/img-2.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   })
//   .then(() => {
//     const myImg1 = document.querySelectorAll(".images")[1];

//     myImg1.style.display = "none";
//     createImage("./img/img-3.jpg").then((data) => {
//       container.append(data);
//     });
//     return wait(1);
//   });

//
//
//
//
//
//-----Challange 36 Başlangıç-----
//Part-1
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Görüntü bulunamadı"));
    });
  });
};

// let mevcutImg;
// createImage("img/img-1.jpg")
//   .then((img) => {
//     mevcutImg = img;
//     console.log("1. Fotoğraf yüklendi");
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImg.style.display = "none";
//     return createImage("./img/img-2.jpg");
//   })
//   .then((img) => {
//     mevcutImg = img;
//     console.log("2. Fotoğraf yüklendi");
//     return wait(2);
//   })
//   .then(() => {
//     mevcutImg.style.display = "none";
//   })
//   .catch((err) => console.log(err));

//-----Challange 36 Bitiş-----

//
//
//
//
//
//-----Challange 37 Başlangıç-----
//1.Bölüm
const loadNpause = async function () {
  try {
    //1.Fotoğraf Yükle
    let img = await createImage("img/img-1.jpg");
    console.log("1. Fotoğraf yüklendi");
    await wait(2);
    img.style.display = "none";
    //2.Fotoğraf Yükle
    img = await createImage("img/img-2.jpg");
    console.log("2. Fotoğraf yüklendi");
    await wait(2);
    img.style.display = "none";
  } catch (err) {
    console.error(err);
  }
};

//loadNpause();

//2.Bölüm
const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    console.log(imgs);
    const imgsEl = await Promise.all(imgs);
    // console.log(imgsEl);
    imgsEl.forEach((img) => img.classList.add("parallel"));
  } catch (err) {
    console.error(err);
  }
};
loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
//-----Challange 37 Bitiş-----
