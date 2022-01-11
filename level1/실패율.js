function solution(N, stages) {
    let answer = [];
    let tmp = [];
    let b = stages.length; //n번째 스테이지에 도달한 사람

    stages.sort((a,b) => (a-b)); //stages배열 오름차순 정렬

    for (let i=1; i<N+1; i++) { //stage는 1부터 시작이니 i=1부터
        let a = stages.reduce((count, element) => count + (i === element), 0); //n번째 스테이지에 도달했지만 성공하지 못한 사람
        tmp.push([i, failure(a,b)]); //실패율 구하고 tmp에 각 스테이지와 실패율 push
        b = b-a; //배열 전체 길이에서 n번째 스테이지에 도달만 한 사람들 빼주기
    }
    
    tmp.sort((a, b) => b[1]-a[1]); //실패율 내림차순에 따라 배열 정렬
    for (let i=0; i<tmp.length; i++) { //내림차순 정렬된 tmp의 스테이지를 answer에 push
        answer.push(tmp[i][0]);
    }
    
    function failure(a,b) { //실패율 함수
        return a/b;
    }
    return answer;
}

const N = 4;
const stages = [4,4,4,4,4]; //4 1 2 3
const result = solution(N, stages);
console.log(result);

//실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
//실패율이 높은 스테이지부터 내림차순으로 스테이지 번호가 담긴 배열 return하기
//실패율이 같다면 작은 번호의 스테이지만 오름차순으로
//스테이지에 도달한 유저가 없으면 해당 스테이지 실패율 0

//N=4, stages=[4,4,4,4,4]
//result=[4,1,2,3]