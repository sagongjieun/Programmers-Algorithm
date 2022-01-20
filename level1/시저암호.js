// function solution(s, n) {
//     let answer = '';
//     for (let i=0; i<s.length; i++) {
//         let unicode = s.charCodeAt(i) + n;
//         console.log(unicode);
//         if (s[i] === ' ') answer += ' '; //공백 먼저 처리
//         else {
//             if (unicode > 90) { //Z를 넘어가면
//                 unicode = 64 + (n - (90 - s.charCodeAt(i)));
//             }
//             else if (unicode > 122) { //z를 넘어가면 
//                 unicode = 96 + (n - (122 - s.charCodeAt(i)));
//             }
//             answer += String.fromCharCode(unicode);
//         }
//     }
//     return answer;
// }

function solution(s, n) {
    return s.split("").map((i) => {
        if (i === " ") return " "; //공백은 그냥 공백 출력
        let unicode = i.charCodeAt(); //i의 유니코드
        return i.toUpperCase().charCodeAt() + n > 90 ? String.fromCharCode(64 + (n - (90 - unicode))) : String.fromCharCode(unicode + n);
    }).join("");
}

const s = "a B z"; // 'a', ' ', 'B', ' ', 'z'
const n = 4;
console.log(solution(s, n));