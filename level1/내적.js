// function solution(a, b) { //for문을 이용한 풀이
//     let answer = 0;
//     let i;
    
//     for (i=0; i<a.length; i++) {
//         answer += a[i]*b[i];
//     }

//     return answer;
// }

function solution(a, b) { //reduce를 이용한 풀이
    return a.reduce((acc, cur, i) => acc += a[i]*b[i], 0);
}

const a = [1,2,3,4];
const b = [-3,-1,0,2];
const result = solution(a, b);
console.log(result);