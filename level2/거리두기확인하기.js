function solution(places) {
  const SIZE = 5;
  const direction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let answer = [];

  const checkRange = (row, col) => {
    if (row >= 0 && col >= 0 && row < SIZE && col < SIZE) return true;
    else return false;
  };

  const manhattanDistance = (row1, col1, row2, col2) => {
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) <= 2 ? true : false;
  };

  const BFS = (place, visited) => {
    let queue = [];

    for (let row = 0; row < SIZE; row++) {
      for (let col = 0; col < SIZE; col++) {
        if (place[row][col] === "P") {
          queue.push([row, col]); // 시작 노드 설정

          while (queue.length) {
            let [y, x] = queue.shift();
            visited[y][x] = 1;

            for (let i = 0; i < 4; i++) {
              const newRow = row + direction[i][0];
              const newCol = col + direction[i][1];

              if (
                checkRange(newRow, newCol) &&
                manhattanDistance(row, col, newRow, newCol) &&
                visited[newRow][newCol] === 0
              ) {
                if (place[newRow][newCol] === "P") return 0;
                if (place[newRow][newCol] !== "X") {
                  queue.push([newRow, newCol]);
                }
              }
            }
          }
        }
      }
    }

    return 1;
  };

  for (const place of places) {
    let visited = [];
    for (let i = 0; i < SIZE; i++) visited.push(new Array(SIZE).fill(0));

    answer.push(BFS(place, visited));
  }

  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];

const result = solution(places);
console.log(result);
