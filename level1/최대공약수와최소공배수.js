function solution(n, m) {
    const biggest = (a, b) => {
        if (b === 0) return a;
        return biggest(b, a % b); //재귀
    };
    const minimum = (a, b) => {
        return (a * b) / biggest(a, b);
    };
    return [biggest(n, m), minimum(n, m)];
}

const n = 2;
const m = 5;
console.log(solution(n, m));