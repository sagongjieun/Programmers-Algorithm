function solution(people, limit) {
    let boat = 0;
    let left = 0;
    let right = people.length - 1;

    people.sort((a,b)=>(b-a)); //80 70 50 50
    while (left < right) {
        if (people[left] + people[right] > limit) left++;
        else {
            left++;
            right--;
        }
        boat++;
    }
    if (left == right) boat++;
    return boat;
}

const people = [70, 50, 80, 50];
const limit = 100;
console.log(solution(people, limit));

// 문제 이해 : 한 구명보트에는 최대 2명이 탈 수 있고, limit을 넘으면 안된다(limit까지는 가능) 모든 사람을 다 태우기 위해 필요한 최소한의 구명 보트 개수를 return하라

// 다른 사람의 풀이를 참고했는데, 퀵정렬처럼 left, right를 중간으로 계속 줄여나가는 방식이 인상적이었음 그리디에도 이런걸 적용할수있구나 싶었다!