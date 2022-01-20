function solution(arr) {
    let answer = [...arr]; //깊은 복사
    if (arr.length === 1) return [-1];
    else {
        const min = arr.sort((a,b)=>(a-b)).shift(); //최소값 반환
        answer = answer.filter((i) => i !== min);
        return answer;
    }
}

const arr = [4,3,2,1];
console.log(solution(arr));