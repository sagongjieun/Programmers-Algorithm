function solution(brown, yellow) {
  const size = brown + yellow;
  let answer = [];

  for (let y = 3; y <= size; y++) {
    const x = size / y;

    if (Number.isInteger(x) && x >= y && (x - 2) * (y - 2) === yellow) {
      answer.push(x, y);
      break;
    }
  }
  return answer;
}

const brown = 18;
const yellow = 12;
console.log(solution(brown, yellow));
