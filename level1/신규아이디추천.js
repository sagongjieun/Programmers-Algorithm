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