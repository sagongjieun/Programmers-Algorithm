function solution(orders, course) {
  let answer = [];
  const list = {};

  // 조합
  const getCombination = (arr, selectNumber) => {
    const result = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(index + 1)];
      const combinations = getCombination(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);

      result.push(...attached);
    });
    return result;
  };

  // 각 주문에 대해
  orders.map((order) => {
    const orderArr = order.split("").sort();

    for (let i = 2; i <= orderArr.length; i++) {
      // 원하는 조합구성 개수가 아닌 경우 넘어가기
      if (!course.includes(i)) continue;

      // 각 주문에 대한 모든 알파벳 조합 구하기
      const combs = getCombination(orderArr, i);
      combs.map((comb) => {
        const string = comb.join("");
        // 알파벳 조합에 대한 개수 구하기
        list[string] = list[string] ? list[string] + 1 : 1;
      });
    }
  });

  // 객체 list의 key, value를 배열로 구하기
  let listArr = Object.entries(list);
  course.map((amount) => {
    // 조합구성의 개수와 길이가 맞는 알파벳 중에서 2개이상인 것들은 후보로 담기
    const candidates = listArr.filter(
      (el) => el[0].length === amount && el[1] > 1
    );

    if (candidates.length > 0) {
      // 후보 중에서 가장 많이 주문된 조합을 정답에 담기
      let max = Math.max(...candidates.map((el) => el[1]));
      candidates.map((el) => {
        if (el[1] === max) answer.push(el[0]);
      });
    }
  });

  // 사전순으로 정렬하여 return
  return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
console.log(solution(orders, course));
