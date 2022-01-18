function solution(a, b) {
    let sum = 0;
    let tmp = 0;
    if (a > b) { //swap
        tmp = a;
        a = b;
        b = tmp;
    }
    for (let i=a; i<=b; i++) sum += i;
    return sum;
}

const a = 5;
const b = 3;
console.log(solution(a, b));