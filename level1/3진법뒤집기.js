function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

const n = 45;
console.log(solution(n)); //7

//10진수->n진수 : 변환할 수.toString(n);
//n진수->10진수 : parseInt(변환할 수, n); 변환할 수 를 n진수로 판단하고 10진수로 변환하게 됨

// n을 3진법 변환하고 reverse()을 통해 뒤집어 주고 그걸 다시 10진수로 변환하고 답으로 return