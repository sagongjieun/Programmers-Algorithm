function solution(numbers) {
    let tmp = [];
    
    for(let i=0; i<numbers.length; i++) { //numbers의 각 원소를 먼저 문자열로 저장
        tmp.push(`${numbers[i]}`);
    }
    const answer = tmp.sort((a, b) => (b+a)-(a+b)).join('');
    
    return answer[0] === '0' ? '0' : answer;
}
let numbers = [0,0,0,0,0]; //6210
const result = solution(numbers);
console.log(result);

//numbers 배열의 각 원소를 문자열로 저장해서(a, b, c, ...)
//for문으로 numbers배열 개수만큼 돌려서 배치할수있는대로 다 배치해보고 그걸 answer배열에 넣어놓기
//answer배열을 sort해서 가장 마지막 인덱스 수를 return하기

//numbers의 각 원소를 가장 왼쪽수가 큰 순서대로 정렬?

//찾은 규칙1 : 오른쪽으로갈수록 작은숫자가오도록 

// 3, 30, 34, 5, 9

// a.replace(/(^0+)/, "");

//11번 테케 : [0,0,0,0] -> 0000으로 return하는 것 0으로 만들어줘야함

function solution(numbers) {
    var answer = '';

    numbers.sort((a, b) => {
        return Number(String(b)+String(a)) - Number(String(a)+String(b));
    })

    return numbers.join('').replace(/^(0+)/, '')||'0';
}

//배열의 문자열 변환과 정렬을 한번에 해준 코드