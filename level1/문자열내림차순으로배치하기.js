function solution(s) {
    // const upper = s.split("").filter((i) => (i == i.toUpperCase())).join("");
    // const lower = s.split("").filter((i) => (i == i.toLowerCase())).join("");
    // return (lower.split("").sort().reverse().join("")) + (upper.split("").sort().reverse().join(""));
    return s.split("").sort().reverse().join("");
}

const s = "Zbcdefg";
console.log(solution(s));