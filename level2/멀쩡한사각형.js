function solution(w, h) {
  let answer = w * h;
  let GCD = 0;

  const getGCD = (num1, num2) => {
    if (num2 === 0) return num1;
    else return getGCD(num2, num1 % num2);
  };

  GCD = getGCD(w, h);
  answer = answer - (w + h - GCD);

  return answer;
}

const w = 8;
const h = 12;
console.log(solution(w, h));
