function solution(clothes) {
  let answer = 1;

  let hash = clothes.reduce((acc, cloth) => {
    acc[cloth[1]] = acc[cloth[1]] ? acc[cloth[1]] + 1 : 1;
    return acc;
  }, {});

  // +1 : 해당 옷만 입은 경우에 대해
  for (let key in hash) answer *= hash[key] + 1;

  return answer - 1;
}

const clothes = [
  ["yello_what", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
const result = solution(clothes);
console.log(result);
