function solution(n) {
    let answer = '';

    while (n > 0) { //n이 0이 아닐때까지 반복
        switch (n % 3) { //3으로 나눈 나머지가 각각 0,1,2인 경우에
            case 1:
                answer = "1" + answer; //10진수가 10인경우에는 맨처음 answer = '1' 그다음 switch문 돌면 answer = '4' + answer = '4'+'1' = '41'
                n = Math.floor(n / 3);
                break;
            case 2:
                answer = "2" + answer;
                n = Math.floor(n / 3);
                break;
            case 0:
                answer = "4" + answer;
                n = n/3 - 1; //3으로 나눈 나머지가 0인 경우에(case 0)만 3으로나눈몫에 -1을 해줌
                break;
        }
    }

    return answer;
}

const n = 10;
const result = solution(n);
console.log(result);