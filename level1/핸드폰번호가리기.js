// function solution(phone_number) {
//     let front = phone_number.substring(0,phone_number.length-4);
//     front.replace(/0-9/g, '*');
//     let back = phone_number.substring(phone_number.length-4);
//     return front + back;
// }
// 위에 코드가 왜안되는지 난 모르겠다.. (replace가 적용이안됨)

function solution(phone_number) {
    let len = phone_number.length - 4;
    return "*".repeat(len) + phone_number.substring(len);
}

const phone_number = "027778888";
console.log(solution(phone_number));