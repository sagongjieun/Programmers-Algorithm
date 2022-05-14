function solution(clothes) {
  let answer = clothes.length; // 초기값은 clothes의 길이로 시작 (각 하나씩 입는 경우)
  let hash = [];

  for (const cloth of clothes) {
    console.log(cloth);
    // hash.push({cloth[1] : cloth[0]});
  }

  //   console.log(hash);
}

const clothes = [
  ["yello_what", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const result = solution(clothes);
console.log(result);
