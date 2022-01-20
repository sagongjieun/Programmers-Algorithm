function solution(x) {
    let sum = 0;
    x = String(x).split(""); //숫자 x를 단위 하나씩 배열화
    for (let i of x) {
        i = parseInt(i); //배열에 들어가있는 수는 문자이니 정수화
        sum += i;
    }
    return (parseInt(x.join("")) % sum === 0) ? true : false;
}

const x = 10;
console.log(solution(x));