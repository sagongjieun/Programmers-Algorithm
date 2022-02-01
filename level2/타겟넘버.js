function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(depth, sum) {
    if (depth === numbers.length) {
      if (sum === target) answer++;
      return;
    }

    dfs(depth + 1, sum + numbers[depth]);
    dfs(depth + 1, sum - numbers[depth]);
  }

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target)); //5

// 문제 이해 : 배열의 각 숫자들을 적절히 더하고 빼서 target 수를 만들 때, 만들 수 있는 방법의 최대 가지수 구하기
