function solution(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") return false;
    else {
      if (s[i] === "(") stack.push(s[i]);
      if (s[i] === ")") stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
}

const s = ")()(";
console.log(solution(s)); //true
