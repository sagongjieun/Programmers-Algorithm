function solution(bridge_length, weight, truck_weights) {
  let passing = new Array(bridge_length).fill(0);
  let time = 0;

  const arrSum = (arr) => {
    return arr.reduce((acc, cur) => {
      acc += cur;
      return acc;
    }, 0);
  };

  while (passing.length) {
    passing.shift();
    time++;

    if (truck_weights.length) {
      if (arrSum(passing) + truck_weights[0] <= weight)
        passing.push(truck_weights.shift());
      else passing.push(0);
    }
  }
  return time;
}

const bridge_length = 2;
const weight = 10;
const truck_weights = [7, 4, 5, 6];
console.log(solution(bridge_length, weight, truck_weights));
