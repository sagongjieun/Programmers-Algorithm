function solution(id_list, report, k) {
  let answer = new Array(id_list.length).fill(0); //정답을 담을 배열 (배열의 길이는 유저 수와 같아야 하므로 배열 크기를 id_list.length로 설정)
  let report_obj = {}; // key : 각 유저, value : key 유저를 신고한 유저의 id 를 배열로 담는 객체 생성

  //객체의 key를 각 유저로 저장
  id_list.map((user) => {
    report_obj[user] = [];
  });

  //각 신고 결과에 대해
  report.map((user) => {
    let [from, to] = user.split(" "); //[신고한 유저, 신고당한 유저] 순서로 배열에 저장
    //중복되는 신고는 제외하고 객체에 {신고당한유저 : [신고한 사람1, 신고한 사람2]} << 이런식으로 담기
    if (!report_obj[to].includes(from)) {
      report_obj[to].push(from);
    }
  });

  //객체의 각 key에 대해 (신고당한 각 유저에 대해)
  for (let key in report_obj) {
    //key의 value 개수가 k개 이상이면 (신고한 사람이 k명 이상이면)
    if (report_obj[key].length >= k) {
      report_obj[key].map((user) => {
        answer[id_list.indexOf(user)] += 1; //유저 배열에서 해당 key의 value에 있는 유저들(신고한 유저들)의 index를 찾아 answer배열에 해당 index 위치에 +1 하기
      });
    }
  }

  return answer;
}

const id_list = ["muzi", "frodo", "apeach", "neo"]; //유저 배열
// "A B" : A가 B를 신고 << 정보를 담은 배열
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const k = 2; //각 유저는 k번 이상 신고되면 정지
const result = solution(id_list, report, k);
console.log(result);
