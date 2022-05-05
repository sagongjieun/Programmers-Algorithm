function solution(s) {
  for (let i = 1; i <= Number(s.length / 2); i++) {
    let tempStr = s.substr(0, i);
    let index = 0;

    for (index = i; index <= s.length; index += i) {
      let nextStr = s.substr(index, i);
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
