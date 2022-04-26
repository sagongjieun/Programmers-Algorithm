const test = [
  {
    imagePath: "logo-sign.png",
  },
  { imagePath: "naver-login.png" },
  {
    imagePath: "signup-bg.png", // 대표이미지
  },
  {
    imagePath: "kakao-login.png",
  },
];

const index = 2;

const thumbnail = [];

for (let i = 0; i < test.length; i++) {
  if (i === index) {
    test[i].order = 0;
    thumbnail.push(test[i]);
    test.splice(i, 1);
  }
}

for (let i = 0; i < test.length; i++) {
  test[i].order = i + 1;
}

console.log(test);
console.log(thumbnail);
console.log("결과:", thumbnail.concat(test));

// 썸네일 이미지랑 다른 이미지들 나눠서 나중에 한꺼번에 합치기
