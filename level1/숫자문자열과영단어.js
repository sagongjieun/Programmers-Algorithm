// function solution(s) {
//     var answer = 0;
//     let ans = '';
//     const match = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

//     for (var i=0; i < s.length; i++) { //i는 문자열
//         if (!isNaN(s[i])) { //i가 숫자라면
//             number.index = i;
//             number.num = s[i];
//             ans += s[i];
//             //index_array.push(i);
//         }
//     }

//     for (var j=0; j < match.length; j++) {
//         if (s.includes(match[j])) {
//             ans += j;
//             //index_array.push(s.indexOf(match[j]));
//         }
//     }

//     answer = parseInt(ans);
//     return answer;
// }

// function solution(s) {
//     var answer = 0;

//     s = s.replace(/zero/g, 0);
//     s = s.replace(/one/g, 1);
//     s = s.replace(/two/g, 2);
//     s = s.replace(/three/g, 3);
//     s = s.replace(/four/g, 4);
//     s = s.replace(/five/g, 5);
//     s = s.replace(/six/g, 6);
//     s = s.replace(/seven/g, 7);
//     s = s.replace(/eight/g, 8);
//     s = s.replace(/nine/g, 9);

//     answer = parseInt(s);

//     return answer;
// }

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s; //answer = 'one4seveneight'

    for(let i=0; i< numbers.length; i++) { //i=0은 그냥 넘어가고 i=1이면
        let arr = answer.split(numbers[i]); //arr = ['one','4seveneight']
        
        answer = arr.join(i); //
        console.log(answer);
    }

    console.log(answer);
    return Number(answer);
}

const s = "one4seveneight"; //1478
const result = solution(s);
console.log(result);

//match에서 i와 해당되는 index를 리턴하여 문자열로 바꿔준다음 ans에 추가하기