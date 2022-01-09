function solution(record) {
    let records = [record];
    let answer = [];

    for(let i=0; i<record.length; i++) {
        let message = record[i].split(" "); //record의 각 문장을 단어별로 잘라서 배열에 담기
        let user = {
            userid: message[1],
            nickname: message[2]
        };
        console.log(user);

        switch(message[0]) {
            case 'Enter':
                answer.push(`${message[2]}님이 들어왔습니다.`);
                if (message[1] === user.userid) { //이미 들어왔던 사람은
                    user.nickname = message[2];
                }
                break;
            case 'Leave':
                //answer.push(`${user.nickname}님이 나갔습니다.`);
                break;
            case 'Change':
                user.nickname = message[2];
                break;
        }
    }
    //console.log(answer);
    
    return answer;
}

const record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];
const result = solution(record);
//console.log(result);

//record[n][0] = Enter, Leave, Change
//record[n][1] = uid
//record[n][2] = nickname
//Change는 상태메시지 안뜸

["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]

// 0: ['Enter', 'uid1234', 'Muzi']
// 1: ['Enter', 'uid4567', 'Prodo']
// 2: ['Leave', 'uid1234']
// 3: ['Enter', 'uid1234', 'Prodo']
// 4: ['Change', 'uid4567', 'Ryan']