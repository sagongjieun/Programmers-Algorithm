function solution(d, budget) {
    let answer = 0;
    d.sort((a,b) => (a-b)); //오름차순 정렬

    for (let i of d) {
        if (i > budget) break; //배열의 원소가 budget보다 크다면 break
        else {
            budget -= i; //배열의 원소가 budget보다 크거나 같아질때까지 원소를 계속 빼기
            answer++; //정답 count 올리기
        }
    }
    return answer;
}

const d = [2,2,3,3];
const budget = 10;
console.log(solution(d, budget));