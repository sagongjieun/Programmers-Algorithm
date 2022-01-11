function solution(lottos, win_nums) {
    var answer = [0, 0];
    let count = 0;

    function removeRepeat(arr1, arr2) { //두 배열의 중복 제거하고 합치는 함수
        return arr1.concat(arr2).filter(item => !arr1.includes(item) || !arr2.includes(item));
    }
    
    let noRepeat = removeRepeat(lottos, win_nums);
    console.log(noRepeat);
    count += (lottos.length - (noRepeat.length/2));

    let min = count;
    let max = count + noRepeat.filter(item => 0 === item).length;

    function rank(num) {
        if (num === 6) return 1;
        else if (num === 5) return 2;
        else if (num === 4) return 3;
        else if (num === 3) return 4;
        else if (num === 2) return 5;
        else return 6;
    }

    answer[0] = rank(max);
    answer[1] = rank(min);

    return answer;
}

const lottos = [44, 1, 0, 0, 31, 25]; // 0 0 1 25 31 44
const win_nums = [31, 10, 45, 1, 6, 19]; // 1 6 10 19 31 45
const result = solution(lottos, win_nums);
console.log(result);

// 0 0 25 44
// 6 10 19 45
// 0 0 6 10 19 25 44 45 : noRepeat
// 두 배열의 공통된 수는 제거(concat, filter 활용)하고 count++하기
// 그다음 정렬해서 0의 최대개수->최고순위, 최저순위 정하기

//const rank = [6, 6, 5, 4, 3, 2, 1]; 
//rank를 위와같이도 표현할 수 있었음
//filter 함수 : 배열에서 특정 조건에 부합하는 값들만을 모아서 새로운 배열로 리턴하는 함수