function solution(absolutes, signs) {
    let answer = 0;
    let i, j;

    for (i=0; i<signs.length; i++) {
        if (signs[i] === true) {
            absolutes[i] = absolutes[i] * 1;
        }
        else absolutes[i] = absolutes[i] * -1;
    }

    for (j=0; j<absolutes.length; j++) {
        answer += absolutes[j]
    }

    return answer;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];
const result = solution(absolutes, signs);
console.log(result);

// 다른사람의 풀이

// function solution(absolutes, signs) {

//     return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
// }

// 위의 코드를 이해하기 위해 삼항 연산자를 공부해보면 좋을듯 싶다
// https://ichi.pro/ko/javascript-ui-mabeob-217281274422961