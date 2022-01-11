function solution(numbers) {
    let i, j;
    let answer = 0;
    let num = [0,1,2,3,4,5,6,7,8,9];

    for (i=0; i<numbers.length; i++) { //numbers에 0~9가 있는지 확인
        if (num.includes(numbers[i])) {
            num[numbers[i]] = 0; //0~9가 있으면 num배열에 해당 값을 0으로 만들기
        }
    }

    for (j=0; j<num.length; j++) { //num배열에 남아있는 값 더하기
        answer += num[j]
    }

    return answer;
}

const numbers = [1,2,3,4,6,7,8,0]
const result = solution(numbers);
console.log(result);

// 다른 사람의 풀이

// function solution(numbers) {
//     return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
// }