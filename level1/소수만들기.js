function solution(nums) {
    let answer = 0;
    const len = nums.length;
    
    for (let i=0; i<len; i++) { //배열 안에서 서로다른 3개의 수를 더하기
        for (let j=i+1; j<len; j++) {
            for (let k=j+1; k<len; k++) {
                let sum = nums[i] + nums[j] + nums[k];

                if (isPrime(sum)) { //소수라면 정답 count++
                    answer++;
                }
            }
        }
    }

    function isPrime(sum) {
        if (sum < 2) return true;
        for (let i=2; i<sum; i++) { //1외에 숫자 하나라도 나누어떨어지면 소수탈락
            if (sum % i == 0) return false;
        }
        return true;
    }

    return answer;
}

const nums = [1,2,7,6,4];
const result = solution(nums);
console.log(result);

//우선 이문제를 풀려면 소수를 알 수 있는 알고리즘을 짜야할듯 -> 검색
//배열의 요소 중 3개를 고르는건 어케? -> 3중 for문을 통해