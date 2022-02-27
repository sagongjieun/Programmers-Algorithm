function solution(s) {
  let answer = [];

  if (s.length === 1) return 1;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    for (let j = 0; j < s.length; j += i) {
      let current = s.substr(j, i);
    }
  }
}

const s = "aabbaccc"; //7
const result = solution(s);
console.log(result);

// 안 잘려지는 경우는 s.length 반환

/*
const a = "AAAbbCC";

a.match(/[A-z]{3}/);
// AAA
*/
