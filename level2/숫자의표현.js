function solution(n) {
  let answer = 0; //정답이 될 변수
  let i = 1; //1부터 n까지 하나씩 오르는 변수
  while (i <= n) {
    let j = i; //현재 i를 copy
    let copy = n; //n을 copy
    while (copy > 0) {
      //copy 즉, n이 양수일 동안
      copy = copy - j; //연속된 수 j를 하나씩 빼주기
      j++; //ex) 15 = 15-1 -> 14 = 14-2 -> 12 = 12-3 -> 9 = 9-4 ...
    }
    i++; //i를 +1 해줘서 다음 수부터 연속되는 수에대해서 또 찾기
    if (copy === 0) answer++;
    //두번째 while문을 통해서 나온 copy가 0이라면 연속된 j 수들의 덧셈에 의해 0으로 떨어진 것이니 정답 +1
    else continue; //0으로 떨어지지 않았다면 i로 시작된 연속된 수는 n을 만들 수 없다는 의미니까 그냥 continue
  }
  return answer;
}

const n = 15;
console.log(solution(n));
