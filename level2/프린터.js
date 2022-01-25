function solution(priorities, location) {
    let max;
    let count = 0;

    while(true) {
        max = Math.max(...priorities); //우선순위가 제일 높은 수 저장
        let first = priorities.shift(); //우선순위 배열의 제일 앞 요소를 빼내기

        if (first !== max) priorities.push(first); //제일 앞 요소가 max값이 아니면 push를 통해 우선순위 배열의 제일 마지막으로 보내기
        else { //제일 앞 요소가 max값이면
            count++; //내가 찾는게 몇 번째로 출력되는지 반환하기 위해 +1씩 해주기
            if (location === 0) return count; //위의 과정을 반복하다가 내가 찾는 것이 제일 앞 요소가 되었을때, 계속 +1 해오던 count 반환
        }
        location--; //내가 찾는 요소가 제일 앞 요소가 될 때까지 location 줄여나가기

        if (location === -1) location = priorities.length - 1; //location을 줄여나가다가 idx가 0보다 작아지게 되면 배열의 가장 끝 idx로 보내기
    }
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
console.log(solution(priorities, location));