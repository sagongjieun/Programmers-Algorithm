function solution(numbers) {
    let tmp = [];
    let answer = [];
    const len = numbers.length;
    let sum = 0;

    for (let i=0; i<len; i++) { //배열에서 서로다른 두 수를 뽑아
        for (let j=i+1; j<len; j++) {
            sum = numbers[i]+numbers[j];
            tmp.push(sum); //더한 값을 tmp에 push
        }
    }

    tmp.forEach((i) => { //tmp 배열의 중복을 제거하여 answer에 push
        if (!answer.includes(i)) {
            answer.push(i);
        }
    });

    answer.sort(function(a, b) { //answer 배열 오름차순 정렬
        return a-b;
    });

    return answer;
}

const numbers = [5,0,2,7];
const result = solution(numbers);
console.log(result);

// 이중for문 돌려서 각 자리별로 더한거 answer배열에 담고 중복제거하고 sort하기