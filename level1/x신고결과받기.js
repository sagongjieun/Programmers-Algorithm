function solution(id_list, report, k) {
    let answer = [];
    let recode = [];
    let stop_candidate = []; // 신고당한 사람들
    let stop = []; // 신고 k번이상 당해서 정지당한 사람들
    let count = 0; // 신고 횟수 count

    for (let i=0; i<report.length; i++) {
        recode.push(report[i].split(" ")); //report의 각 요소를 띄어쓰기 단위로 나누어 배열화
        stop_candidate.push(recode[i][1]); //신고당한 사람들 배열에 넣기
    }
    
    // answer = id_list.reduce((acc, cur) => {

    // }, [])
    //여기서 바로 reduce함수 써서 id_list에 해당하는 사람들 count++하는게 나을듯
    // stop = stop_candidate.filter((i) => length(i) >= k);
    // console.log(stop);
    
    return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];
const k = 2;
const result = solution(id_list, report, k);
// console.log(result);

/* 
muzi - frodo, neo
appeach - frodo, muzi
frodo - neo
*/

// report에 각 요소별로 [1]번째 (신고당한사람)의 이름을 stop_candidate배열에 넣어놓고 stop_candidate에 k번이상 담긴사람은 stop배열로 filter해서 새로 반환
// id_list 만큼 for문돌면서 그 안에서 또 report for문 돌면서 id_list의 각 i에 해당하는 것에서 report의 두번째 인덱스가 stop배열에 담긴 사람들이면 count++해서 answer배열에 담기

// 주의할 점 : a가 b를 여러번 신고해도 count는 1번만 됨