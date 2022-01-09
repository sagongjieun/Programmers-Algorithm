function solution(progresses, speeds) {
    let answer = [];
    let day = []; //앞으로 남은 진행일 저장하는 배열
    let count = 1; //한 번의 배포에 몇개의 기능이 배포되는지 count하는 변수 (최소 1개는 배포되는 것이니 초기값 1)
    let max = 0; //한번에 배포될 기능들 중 진행일이 가장 길게 남은 일수를 저장할 변수
    let len = progresses.length; //=speeds.length

    for (let i=0; i<len; i++) {
        day.push(Math.ceil((100-progresses[i])/speeds[i])); //올림함수 Math.ceil()을 통해 각각의 남은 진행일을 day에 push
    }

    for (let i=0; i<len; i++) {
        max = day[i]; //남은 진행일 중 최대값 담아놓기
        while (max > day[i+1] || max === day[i+1]) { //최대 진행일을 가진 기능보다 그 바로 다음 기능의 진행일이 적은 경우나 최대 진행일과 같은 경우에는
            count++; //한번에 배포할 기능 +1
            i++;
        }
        answer.push(count);
        count = 1; //다시 초기화
    }
    return answer;
}

const progresses = [99, 99, 99]; //이 테스트에서 계속 막혔음(test 1,2,4,5)
const speeds = [1, 1, 1];
const result = solution(progresses, speeds);
console.log(result);

// Math.ceil() 함수 정리하기