// 2 < id.length < 16
// 소문자, 숫자, -, _, .
// .은 처음과 끝에 사용X + 연속으로 사용X

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
//      만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

// function solution(new_id) {
//     var answer = '';
//     new_id = new_id.toLowerCase(); //1단계
//     var impossible = [ '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '[', '{', ']', '}', ':', '?', ',', '<', '>', '/' ];

//     for (var j = 0; j < new_id.length; j++) {
//         for (var i = 0; i < impossible.length; i++) {
//             if (new_id[j] === impossible[i]) { //2단계
//                 new_id = new_id.replace(new_id[j], '');
//             }
//         }
//     }

//     new_id = new_id.replace(/[.]/g, '');
    
//     return answer;
// }

function solution(new_id) {
    var answer = '';
    answer = new_id
            .toLowerCase() //1단계
            .replace(/[^\w-_.]/g, '') //2단계
            .replace(/\.+/g, '.') //3단계
            .replace(/^\.|\.$/g, ''); //4단계

    if(answer === '') { //5단계
        answer += 'a';
    }

    answer = answer
            .slice(0, 15) //6단계
            .replace(/\.$/g, '')
            .padEnd(3, answer[answer.length-1]); //7단계 -> charAt()로 푸는 경우도많음

    return answer;
}

const new_id = "z-+.^.";
let result = solution(new_id);
console.log(result);

// 7가지 조건을 if문으로 해결