function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2); //처음 두 요소만 false로 fill하기

  //2부터 n까지의 수 중에서(1은 이미 소수가 아님) 루트n 이하의 수들만 봐주면 됨
  for (let i = 2; i * i <= n; i++) {
    //각 i에 대한 배수들을 판단해 해당 수는 false로 만들기(소수가 아니므로)
    for (let j = i * i; j <= n; j += i) {
      arr[j] = false;
    }
  }
  return arr.filter((i) => i).length;
}

const n = 10;
console.log(solution(n));
