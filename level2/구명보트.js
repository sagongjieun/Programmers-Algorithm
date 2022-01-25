function solution(people, limit) {
    let boat = 0;
    let left = 0; //무게 배열에서 제일 큰 무게
    let right = people.length - 1; //무게 배열에서 제일 작은 무게

    people.sort((a,b)=>(b-a)); //무게 순으로 내림차순하고
    while (left < right) {
        if (people[left] + people[right] > limit) left++; //제일 큰 무게 + 제일 작은 무게 > limit 이면 두 명이 같이 보트에 못 탄다는 의미니까 다음 진행을 위해 left++시키고 boat++ 해주기
        else { //limit보다 같거나 작으면 같이 보트에 탈 수 있는 거니까 다음 진행을 위해 left++, right-- 진행 해주고 boat++ 해주기
            left++;
            right--;
        }
        boat++;
    }
    if (left == right) boat++; //마지막으로 남아있는 사람이 있다면 마지막으로 그 사람을 태우기 위한 boat++ 해주기
    return boat;
}

const people = [70, 50, 80, 50];
const limit = 100;
console.log(solution(people, limit));