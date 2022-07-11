function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const strToSet = (str) => {
    let set = [];

    for (let i = 1; i < str.length; i++) {
      if (/^[a-z|A-Z]+$/.test(str[i - 1]) && /^[a-z|A-Z]+$/.test(str[i])) {
        set.push(str[i - 1] + str[i]);
      }
    }

    return set;
  };

  const jaccard = (arr1, arr2) => {
    let similarity = 0;

    // arr1, arr2 모두 공집합이면 J(A, B) = 1
    if (arr1.length === 0 && arr2.length === 0) similarity = 1;
    else {
      let union = []; // 합집합
      let intersection = []; // 교집합

      for (let i = 0; i < arr2.length; i++) {
        // arr2의 각 요소에 대해 arr1에도 존재한다면
        if (arr1.indexOf(arr2[i]) >= 0) {
          // 교집합에 해당 요소 넣고 arr1에서 해당 요소 삭제
          intersection.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
        }
        // 합집합에 arr2의 요소 모두 넣기
        union.push(arr2[i]);
      }

      // 합집합에 교집합에서 삭제된 요소 외의 arr1의 요소 모두 넣기
      for (let i = 0; i < arr1.length; i++) {
        union.push(arr1[i]);
      }

      similarity = intersection.length / union.length;
    }

    return similarity;
  };

  let set1 = strToSet(str1);
  let set2 = strToSet(str2);
  let answer = jaccard(set1, set2);

  return parseInt(answer * 65536);
}

const str1 = "aa1+aa2";
const str2 = "AAAA12";
console.log(solution(str1, str2));

// 자카드 유사도 : 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값
// 집합 A, B가 공집합이면 나눗셈이 정의되지 않으므로 J(A,B) = 1로 정의
// 입력문자들은 두글자씩 끊어서 다중집합의 원소로 만든다. (영문자로 된 쌍만 유효하다. 특수문자나 숫자가 들어가는 쌍은 그 쌍을 버린다.)
// 대소문자 구분은 따로 하지 않는다.

// 출력 : 자카드 유사도 값에 65536을 곱하고 소수점 아래는 버리고 정수만 출력
