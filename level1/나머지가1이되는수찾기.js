function solution(n) {
    let answer = 0;
    while (true) {
        if (n%answer === 1) return answer; //나머지가 1이라면 답으로 return
        else answer++; //아니면 +1 하기
    }
}

const n = 12;
const result = solution(n);
console.log(result);