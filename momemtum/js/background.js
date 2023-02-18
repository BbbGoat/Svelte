// 이미지 array
const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

// console.log(bgimage);

// 자바스크립트에서 태그 만들기
bgimage.src = `img/${chosenImage}`;

// 만들어진 태그를 html에 추가하기
document.body.appendChild(bgimage);
