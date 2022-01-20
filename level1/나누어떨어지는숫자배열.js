function solution(arr, divisor) {
    let answer = [];
    arr.forEach((i) => {
        if (i % divisor === 0) answer.push(i);
    });
    return (answer.length === 0) ? [-1] : answer.sort((a,b) => (a-b));
}

const arr = [5, 9, 7, 10];
const divisor = 5;
console.log(solution(arr, divisor));

// 문제 이해 : arr[i]들을 divisor로 나누어 떨어지는 값을 오름차순으로 정렬하고, 나누어 떨어지는 값이 없다면 -1을 return