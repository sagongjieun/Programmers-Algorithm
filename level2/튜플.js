function solution(s) {
  let answer = [];
  let sArr = [];

  // 문자열로 된 튜플 처리
  s = s.slice(2, s.length - 2).split(/},{/g);
  for (let i of s) {
    i = i.split(",").map((num) => Number(num));
    sArr.push(i);
  }
  // 길이순으로 오름차순 정렬
  sArr.sort((a, b) => a.length - b.length);

  for (let i of sArr) {
    for (let num of i) {
      if (!answer.includes(num)) answer.push(num);
      else continue;
    }
  }

  return answer;
}

const s = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
console.log(solution(s));
