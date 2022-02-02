function solution(num) {
  let answer = 0; //정답 변수
  if (num === 1) return 0; //num이 1이면 코드를 실행할 필요가 없으니 0 return
  while (true) {
    if (num % 2 === 0) {
      num = num / 2;
      answer++;
    } else {
      num = num * 3 + 1;
      answer++;
    }

    if (num === 1) break; //num이 1이 되면 break
    if (answer > 500) return -1; //500번반복해도 안되면 -1 return
  }
  return answer;
}

const num = 1;
console.log(solution(num));
