function solution(s) {
  let answer = s.length; // 정답 변수

  // i = 압축하는 문자열의 길이
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let str = ""; // 압축한 문자열 저장 변수
    let count = 1; // 압축한 횟수
    let standardStr = s.substr(0, i); // 압축하는 기준 문자열
    let index = 0; // 문자열 s에서 압축하기 위한 문자열의 위치를 나타내는 인덱스

    for (index = i; index <= s.length; index += i) {
      let nextStr = s.substr(index, i);

      // 두 문자열이 같으면 압축이 가능
      if (standardStr === nextStr) count++;
      else {
        if (count === 1) str = str + standardStr;
        else str = str + count + standardStr; // 압축 수 붙이기

        count = 1;
        standardStr = nextStr;
      }
    }

    if (count === 1) str = str + standardStr;
    else str = str + count + standardStr;

    answer = Math.min(answer, str.length);
  }

  return answer;
}

const s = "aabbaccc"; //7
const result = solution(s);
console.log(result);
