function solution(n, arr1, arr2) {
  let map1 = []; //arr1의 요소를 2진수로 나타낼 배열
  let map2 = []; //arr2의 요소를 2진수로 나타낼 배열
  let map = []; //map1 || map2의 결과를 나타낼 배열 (최종 비밀지도)
  let answer = []; //map의 각 요소를 판단하여 # 혹은 공백으로 나타낼 정답 배열

  //arr1의 각 요소인 10진수를 2진수로 변환하고, n개의 길이에 맞춰 부족하면 앞에 0으로 추가
  for (let i = 0; i < n; i++) map1.push(arr1[i].toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) map2.push(arr2[i].toString(2).padStart(n, "0"));

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      //map1과 map2의 각 요소를 하나하나 비교하여 ||연산자의 결과가 1이면 map배열에 1로 저장하기
      if (parseInt(map1[i][j]) || parseInt(map2[i][j]) === 1) str = str + "1";
      else str = str + "0";
    }
    map.push(str);
  }

  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      //map 배열을 모두 돌며 1 -> #, 0 -> ' ' 으로 바꿔주기
      map[i][j] === "1"
        ? (str = str + map[i][j].replace("1", "#"))
        : (str = str + map[i][j].replace("0", " "));
    }
    answer.push(str);
  }

  return answer;
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n, arr1, arr2));
//출력 : ["#####","# # #", "### #", "# ##", "#####"]
