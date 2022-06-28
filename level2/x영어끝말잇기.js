function solution(n, words) {
  let answer = [0, 0];
  let temp = [];
  let position = 0;

  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      let lastWord = temp[temp.length - 1];

      if (lastWord.substr(lastWord.length - 1) !== words[i].substr(0, 1))
        position = i;
      else if (temp.includes(words[i])) position = i;
    }
    temp.push(words[i]);

    if (position > 0) {
      let person = position + 1 > n ? (position + 1) % n : position + 1;
      let term = Math.ceil((position + 1) / n);

      answer = [person === 0 ? n : person, term];
      break;
    }
  }

  return answer;
}

const n = 3;
const words = [
  "tank",
  "kick",
  "know",
  "wheel",
  "land",
  "dream",
  "mother",
  "robot",
  "tank",
];
console.log(solution(n, words));

// 정답 : [번호, 차례] / 정답 없으면 [0, 0]
// 이전에 등장한 단어 안됨 / 한 글자 단어 안됨 / 끝말잇기 제대로 못한경우
