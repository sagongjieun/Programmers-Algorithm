function solution(answers) {
    let answer = [];

    let count = [0,0,0]; //몇개 맞춘지 count를 올릴 배열
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];

    for (let i=0; i<answers.length; i++) {
        if (answers[i] === one[i % one.length]) count[0]++;
        if (answers[i] === two[i % two.length]) count[1]++;
        if (answers[i] === three[i % three.length]) count[2]++;
    }
    // "i%수포자.length"를 해주는 이유 : one, two, three, answers의 배열의 길이가 모두 다르기 때문에 index에 맞춰 값을 비교해야하기 때문
    const max = Math.max(count[0], count[1], count[2]);
    for (let i=0; i<count.length; i++) {
        if (count[i] === max) { //최대값의 수를 가진학생의 idx에 +1을 하여 answer에 삽입
            answer.push(i+1);
        }
    }

    return answer;
}

const answers = [1,2,3,4,5];
const answer = solution(answers);
console.log(answer);

// 의문점? answers는 항상 원소가 5개로 이루어져있나? / 전부다 정답이 다 틀리다면?
// 수포자 1,2,3의 규칙성의 개수가 다 다르니 5와 각각 규칙성의 개수와의 최소공배수를 통해 answers와의 규칙성을 찾아낸다