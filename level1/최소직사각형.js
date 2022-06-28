function solution(sizes) {
  let w = [],
    h = [];

  sizes.map((size, i) => {
    w[i] = Math.max(...size);
    h[i] = Math.min(...size);
  });

  return Math.max(...w) * Math.max(...h);
}

const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes));
