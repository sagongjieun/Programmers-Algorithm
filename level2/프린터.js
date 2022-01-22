function solution(priorities, find) {
    let max;
    let count = 0;

    while(true) {
        max = Math.max(...priorities);
        let first = priorities.shift(); //맨 앞의 요소

        if (first !== max) priorities.push(first);
        else {
            count++;
            if (find === 0) return count;
        }
        find--;

        if (find === -1) find = priorities.length - 1;
    }
}

const priorities = [1, 1, 9, 1, 1, 1];
const find = 0;
console.log(solution(priorities, find)); //1

// 자바스크립트 배열 내 최대값 최소값 : Math.min(), Math.max()
// Math.max.apply(null, 배열) or Math.max(...배열) 두가지사용법