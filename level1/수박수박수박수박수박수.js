function solution(n) {
    return (n % 2 === 0) ? ("수박").repeat(n/2) : ("수박").repeat(n/2)+"수";
}

const n = 5;
console.log(solution(n));