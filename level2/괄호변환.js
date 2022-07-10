function solution(p) {
  let answer = "";
  let open = 0,
    close = 0;

  if (!p) return "";

  // 올바른 문자열 체크함수
  const checkRight = (p) => {
    let stack = [];

    for (let i = 0; i < p.length; i++) {
      if (p[i] === "(") stack.push(p[i]);
      if (p[i] === ")") {
        if (stack.length === 0) return false;
        stack.pop();
      }
    }

    return true;
  };

  for (let i = 0; i < p.length; i++) {
    const bracket = p[i];

    if (bracket === "(") open++;
    if (bracket === ")") close++;

    // 균형잡힌 문자열일 때
    if (open === close) {
      // 올바른 문자열일 때
      if (checkRight(p.slice(0, i + 1))) {
        answer = p.slice(0, i + 1) + solution(p.slice(i + 1));

        return answer;
      }
      // 올바른 문자열이 아닐 때
      else {
        answer = "(" + solution(p.slice(i + 1)) + ")";

        for (let j = 1; j < i; j++) {
          if (p[j] === "(") answer = answer + ")";
          if (p[j] === ")") answer = answer + "(";
        }

        return answer;
      }
    }
  }
}

const p = ")(";
console.log(solution(p));
