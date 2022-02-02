function solution(n) {
  let num = Number;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) return (i + 1) * (i + 1);
    else return -1;
  }
}

const n = 121;
console.log(solution(n));
