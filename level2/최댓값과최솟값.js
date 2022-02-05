function solution(s) {
  s = s.split(" ").map((i) => parseInt(i));
  return `${Math.min(...s)} ${Math.max(...s)}`;
}

const s = "1 2 3 4";
console.log(solution(s)); // "1 4"
