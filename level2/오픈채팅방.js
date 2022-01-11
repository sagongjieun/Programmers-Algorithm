function solution(record) {
    let answer = [];
    let user = {}; //userid, nickname을 담을 user객체
    
    //message[0] = message, message[1] = userid, message[2] = nickname
    for (let i=0; i<record.length; i++) {
        let message = record[i].split(" "); //record의 각 문장을 단어별로 잘라서 배열에 담기
        if (message[0] === "Enter" || message[0] === "Change") { //다시들어오는 경우라도 이 코드를 통해 닉네임이 새로 갱신됨
            user[message[1]] = message[2]; //userid: nicknmae <<이렇게 저장됨
        }
    }
    
    for (let i=0; i<record.length; i++) {
        let message = record[i].split(" ");
        if (message[0] === "Enter") { //객체에 저장된 userid의 nickname을 불러와서 출력
            answer.push(`${user[message[1]]}님이 들어왔습니다.`);
        }
        else if (message[0] === "Leave") {
            answer.push(`${user[message[1]]}님이 나갔습니다.`);
        }
    }

    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
const result = solution(record);
console.log(result);

// result = ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]