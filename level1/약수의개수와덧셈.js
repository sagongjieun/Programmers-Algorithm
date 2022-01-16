const getYakSu = (num) => {
    let yaksu = [];
    for (let i=1; i<=num; i++) { //1부터 num까지
        if (num % i === 0) yaksu.push(i); //나누어 떨어지면 약수에 추가
    }
    for (let i=0; i<yaksu.length; i++) {
        if (yaksu.length % 2 === 0) return true; //약수의 개수가 짝수라면 true
        else return false; //아니면 false
    }
};

function solution(left, right) {
    let answer = 0;
    for (let i=left; i<=right; i++) { //left부터 right까지 (둘다 포함)
        if (getYakSu(i) === true) answer += i; //약수개수가 짝수라면 더하기
        else answer -= i; //아니면 빼기
    }
    return answer;
}

const left = 24;
const right = 27;
console.log(solution(left, right)); //52