function solution(a, b) {
    var answer = '';
    const week = ['SUN','MON','TUE','WED','THU','FRI','SAT']; //일~토
    const day = new Date(`2016-${a}-${b}`).getDay(); //일~토의 index를 반환
    answer = week[day];
    return answer;
}

const a = 5;
const b = 24;
const result = solution(a,b);
console.log(result);