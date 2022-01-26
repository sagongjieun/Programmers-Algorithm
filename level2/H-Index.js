function solution(citations) {
    let answer = 0;
    citations.sort((a, b) => (b - a)); //내림차순 정렬
    //i는 인용횟수, citations[i]는 각 인용횟수별 논문개수
    for (let i=0; i<citations.length; i++) {
        if (i < citations[i]) answer++; //인용횟수가 논문개수보다 작을때까지는 계속해서 +1 해주기 (최대값을 구하는 거니까)
    }
    return answer;
}

const citations = [3, 0, 6, 1, 5];
console.log(solution(citations)); //3