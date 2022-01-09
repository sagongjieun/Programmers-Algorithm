function solution(numbers, hand) {
    let answer = '';
    let num = 0;
    let cur = [0,0];
    let left = [3,0]; //*
    let right = [3,2]; //#

    const keypad = [[3, 1], [0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]]; //0~9 수를 좌표로 표현 *****행렬은 좌표평면의 4사분면을 기준으로해야하는게 아주 큰 포인트였다...

    function distance(a, b) {
        return Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
    }
    
    for (let i in numbers) { //대박;; for ~in 에서의 변수는 index였음..
        num = numbers[i];

        if ((num === 1) || (num === 4) || (num === 7)) {
            answer += 'L';
            left[0] = keypad[num][0]; //left의 x좌표 update
            left[1] = keypad[num][1]; //left의 y좌표 update
        }
        else if ((num === 3) || (num === 6) || (num === 9)) {
            answer += 'R';
            right[0] = keypad[num][0]; //right의 x좌표 update
            right[1] = keypad[num][1]; //right의 y좌표 update
        } 

        else {
            cur[0] = keypad[num][0]; //현재 num의 x좌표 update
            cur[1] = keypad[num][1]; //현재 num의 y좌표 update

            let left_dis = distance(cur, left);
            let right_dis = distance(cur, right);

            if (left_dis === right_dis) { //오른손과 왼손의 차이가 같다면
                if (hand === 'right') { //오른손잡이라면
                    answer += 'R';
                    right[0] = cur[0];
                    right[1] = cur[1];
                }
                else { //왼손잡이라면
                    answer += 'L';
                    left[0] = cur[0];
                    left[1] = cur[1];
                }
            }
            else if (left_dis > right_dis) { //오른손과 더 가까운 경우
                answer += 'R';
                right[0] = cur[0];
                right[1] = cur[1];
            }
            else { //왼손과 더 가까운 경우
                answer += 'L';
                left[0] = cur[0];
                left[1] = cur[1];
            }
        }
    }
    return answer;
}

var numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
var hand = "left";
var result = solution(numbers, hand);
console.log(result);
//LRLLRRLLLRR