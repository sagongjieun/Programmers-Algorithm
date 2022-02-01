function solution(s) {
  let newS = ""; //정답 변수
  s = s.split(" "); //공백 단위로 나누어 단어별로 나누기

  for (let i = 0; i < s.length; i++) {
    //단어의 개수만큼
    for (let j = 0; j < s[i].length; j++) {
      //각 단어의 철자 하나하나에 대해
      if (j % 2 === 0) newS = newS + s[i][j].toUpperCase();
      //짝수면 대문자
      else newS = newS + s[i][j].toLowerCase(); //홀수면 소문자
    }
    if (i < s.length - 1) newS = newS + " "; //마지막 단어의 전까지는 각 단어들 사이에 공백 추가
  }
  return newS;
}

const s = "try hello world";
console.log(solution(s));
//"TrY HeLlO WoRlD"
