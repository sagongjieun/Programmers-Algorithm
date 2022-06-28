function solution(dartResult) {
  let answer = [];

  for (let i = 0; i < dartResult.length; i++) {
    const str = dartResult[i];

    if (/[0-9]/g.test(str)) {
      if (!/[0-9]/g.test(dartResult[i + 1])) {
        if (dartResult[i + 1] === "S") answer.push(Number(str));
        if (dartResult[i + 1] === "D") answer.push(Number(str) ** 2);
        if (dartResult[i + 1] === "T") answer.push(Number(str) ** 3);
      } else {
        if (dartResult[i + 2] === "S") answer.push(10);
        if (dartResult[i + 2] === "D") answer.push(10 ** 2);
        if (dartResult[i + 2] === "T") answer.push(10 ** 3);
      }
    }
    if (/[\*#]/g.test(str)) {
      if (answer.length < 2) {
        answer[0] = str === "*" ? answer[0] * 2 : answer[0] * -1;
      } else {
        if (str === "*") {
          answer[answer.length - 1] = answer[answer.length - 1] * 2;
          answer[answer.length - 2] = answer[answer.length - 2] * 2;
        }
        if (str === "#") {
          answer[answer.length - 1] = answer[answer.length - 1] * -1;
        }
      }
    }
  }

  return answer.reduce((acc, cur) => {
    acc += cur;
    return acc;
  }, 0);
}

const dartResult = "1D2S#10S";
console.log(solution(dartResult));
