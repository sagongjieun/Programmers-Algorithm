function solution(numbers) {
    let answer = new Set();
    let number = numbers.split("");
    
    //소수 판별 함수
    const isPrime = (num) => {
        let count = 0;
        for (let i=1; i<=num; i++) {
            if (num % i === 0) count++;
        }
        return (count > 2) ? false : true;
    };

    const completeSearch = (arr, str) => {
        if (arr.length) {
            for (let i=0; i<arr.length; i++) {
                let copy = [...arr];
                copy.slice(i, 1);
                completeSearch(copy, str+arr[i]);
            }
        }
        if (str > 0) answer.add(Number(str));
    };

    completeSearch(number, '');
    console.log(answer);

    return answer;
}

const numbers = "17";
console.log(solution(numbers)); //3

// 문제 이해 : 한 자리 숫자가 종이 조각들이 numebrs 문자열 안에 입력돼있고, 각 자리수를 배치하여 만들수 있는 소수의 개수 return 하기 (단, 0이 들어간 경우 11과 011의 경우는 같은 숫자로 취급)

// 효율성 통과하기 위해 에라토스테네스의 체 이용하기(시간복잡도가 가장 낮음)