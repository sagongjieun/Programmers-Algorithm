function solution(strings, n) {
    return strings.sort((str1, str2) => 
        str1[n] === str2[n] ? str1.localeCompare(str2) : str1[n].localeCompare(str2[n])
    );
    // return strings.map(a=>[...a][n]+a).sort().map(a=>a.substring(1));
}

const strings = ["abce", "abcd", "cdx"];
const n = 2;
console.log(solution(strings, n));