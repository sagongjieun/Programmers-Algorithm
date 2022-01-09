function solution(n, lost, reserve) {
    let answer = 0;
    let stu = new Array(n).fill(1);

    for(let i=0; i<lost.length; i++) {
        stu[lost[i]-1]--;
    }
    for(let i=0; i<reserve.length; i++) {
        stu[reserve[i]-1]++;
    }

    for(let i=0; i<stu.length; i++) {
        if(stu[i]===0) {
            if(stu[i-1]===2) {
                stu[i]++;
                stu[i-1]--;
            }
            else if(stu[i+1]===2) {
                stu[i]++;
                stu[i+1]--;
            }
        }

        if(stu[i]>=1) {
            answer++;
        }
    }
    return answer;
}

const n = 5;
const lost = [2,4]; 
const reserve = [3];
const result = solution(n, lost, reserve); //4
console.log(result);

//자바스크립트의 Array 객체에는 Array.from() 이라는 함수가 존재하고, 이를 이용하면 "let stu = [0,0,0,0,0,0,0,0,....];"의 경우처럼 배열의 길이가 긴 경우 직접 값을 하나하나 입력하지 않아도 초기화를 시킬 수 있다.
//Array.from() 사용법 : 첫번째 매개변수로 {length: 원하는 길이}를, 두번째 매개변수로 원하는 값을 반환하는 콜백함수를 넘겨주면 된다
//다른 사람의 코드를 보니 Array객체의 fill()함수를 사용하는게 더 가독성이 좋다
//Array.fill() 사용법 : let stu = new Array(n).fill(1);

//시도1
function solution(n, lost, reserve) {
    let answer = 0;
    let stu = Array.from({length:n}, ()=>1); //n개의 길이의 배열에 1로 초기화

    for(let i=1; i<=n; i++) { //학생이 1번부터 시작하니까 1부터
        if(lost.includes(i) && reserve.includes(i)) { //lost, reserve모두 포함 학생은 체육복 개수 1로 고정
            stu[i-1] = 1; //idx를 맞추기 위해 -1
        }
        else if(lost.includes(i)) { //잃어버린 학생은
            stu[i-1]--; //체육복 개수 -1
        }
        else if(reserve.includes(i)) { //여분이 있는 학생은
            stu[i-1]++; //체육복 개수 +1
        }
    }

    for(let i=0; i<n; i++) {
        if(stu[i]==0) { //stu배열을 돌면서 체육복이 0인 학생은
            if(stu[i-1]==2) { //앞의 학생이 체육복이 2개면
                stu[i-1] = 1;
                stu[i] = 1;
            }
            else if(stu[i+1]==2) { //뒤의 학생이 체육복이 2개면
                stu[i+1] = 1;
                stu[i] = 1;
            }
        }
    }

    const result = stu.filter(i => i!==0); //stu배열에서 0을 제외한 배열만들기
    answer = result.length;
    return answer;
}