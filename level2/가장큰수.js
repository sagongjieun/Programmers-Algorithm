function solution(numbers) {
    let tmp = [];
    
    for(let i=0; i<numbers.length; i++) { //numbers의 각 원소를 먼저 문자열로 저장
        tmp.push(`${numbers[i]}`);
    }
    const answer = tmp.sort((a, b) => (b+a)-(a+b)).join('');
    
    return answer[0] === '0' ? '0' : answer;
}
let numbers = [0,0,0,0,0];
const result = solution(numbers);
console.log(result);

//찾은 규칙1 : 오른쪽으로갈수록 작은숫자가오도록 
// a.replace(/(^0+)/, ""); 의미 : 젤왼쪽에 오는 0 없애기

//11번 테케 : [0,0,0,0] -> 0000으로 return하는 것 0으로 만들어줘야함

function solution(numbers) {
    var answer = '';

    numbers.sort((a, b) => {
        return Number(String(b)+String(a)) - Number(String(a)+String(b));
    })

    return numbers.join('').replace(/^(0+)/, '')||'0';
}

//배열의 문자열 변환과 정렬을 한번에 해준 코드