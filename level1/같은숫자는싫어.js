function solution(arr) {
    let answer = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== arr[i+1]) answer.push(arr[i]); //배열의 원소가 다음 인덱스 원소와 같지 않다면 정답에 push
    }
    return answer;
}

const arr = [4,4,4,3,3];
console.log(solution(arr));

// 다른 분의 멋진 풀이
// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }