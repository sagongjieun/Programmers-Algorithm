function solution(N, stages) {
    let answer = [];
    let tmp = [];
    let b = stages.length; //n번째 스테이지에 도달한 사람(=오름차순으로 정렬돼 있으니 배열 전체 길이)
    stages.sort((a,b) => (a-b)); //stages 오름차순 정렬
    for (let i=0; i<N; i++) {
        let a = stages.reduce((count, element) => count + (i+1 === element), 0); //n번째 스테이지에 도달했지만 성공하지 못한 사람
        tmp.push(failure(a,b)); //실패율 구하고
        b = b-a; //배열 전체 길이에서 n번째 스테이지에 도달만 한 사람들 빼주기
    }
    console.log(tmp);
    tmp.sort((a,b) => (b-a));
    console.log(tmp);
    for (let i=0; i<tmp.length; i++) { //중복되는 실패율 시, 스테이지 수 오름차순
        tmp[i] = i;
    }
    console.log(tmp);
    function failure(a,b) { //실패율 함수
        return a/b;
    }
    return answer;
}

const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3]; //3 4 2 1 5
const result = solution(N, stages);
//console.log(result);

//실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열 return하기
//실패율이 같다면 작은 번호의 스테이지만 오름차순으로
//스테이지에 도달한 유저가 없으면 해당 스테이지 실패율 0

//N=4, stages=[4,4,4,4,4]
//result=[4,1,2,3]