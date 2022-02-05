function solution(n) {
  let i = 1;
  while (i * i <= n && i * i !== n) {
    // 어떤 제곱수가 n이하이고, 그 제곱수가 n이 아닐때까지 반복하며 i++
    i++;
  }
  if (i * i === n) return (i + 1) * (i + 1);
  //어떤 제곱수가 n이하일 때, 그 수 중에서 n의 제곱근이 되는 i가 있다면 (i+1)의 제곱수 출력
  else return -1; //없다면 -1 출력
}

const n = 3;
console.log(solution(n));
