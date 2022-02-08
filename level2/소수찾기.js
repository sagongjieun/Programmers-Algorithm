function solution(numbers) {
  const arr = numbers.split(""); //입력받은 문자열을 한글자씩 나누기
  const answer = new Set(); //정답(소수)을 넣을 set 선언
  let testCount = 0;

  getPermutation(arr, "");

  function getPermutation(arr, fixed) {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        console.log(`testCount : ${testCount}`);
        console.log(arr[i]);
        const newFixed = fixed + arr[i];
        const copyArr = [...arr];
        copyArr.splice(i, 1); //arr[i]번째 요소를 copyArr에서 제거하는 과정

        if (isPrime(parseInt(newFixed))) {
          answer.add(parseInt(newFixed));
        }
        testCount++;
        getPermutation(copyArr, newFixed);
      }
    }
  }

  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  return answer;
}

const numbers = "17";
console.log(solution(numbers));

//각 자리수로 만들수있는 숫자조합들을 다 만들고나서(완전 탐색)
//에라토스테네스의 체 써서 소수 찾기
