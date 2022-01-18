function solution(s) {
    const len = s.length;
    const medium = Math.round(len / 2); //반올림
    return (len % 2 === 0) ? s.substring(medium-1, medium+1) : s[medium-1];
}

const s = "abcde";
console.log(solution(s));