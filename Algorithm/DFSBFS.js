/* 이 버전은 DFS, BFS 모두 queue로 사용하는 방식임 */

const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

const DFS = (graph, startNode) => {
  let visited = []; // 탐색을 마친 노드들
  let unvisited = []; // 탐색 해야 할 노드들

  unvisited.push(startNode);

  while (unvisited.length !== 0) {
    const node = unvisited.shift(); // Queue이기 때문에 선입선출을 위해 shift 사용

    if (!visited.includes(node)) {
      visited.push(node);
      unvisited = [...graph[node], ...unvisited];
    }
  }

  return visited;
};
/* DFS를 말로 풀어쓰자면 다음과 같다 */
// 준비물 : 그래프와 시작노드의 인자가 필요하고, 방문한 노드를 담을 배열과 방문할 노드를 담을 배열이 필요하다.
// 1. 방문할 노드에 시작 인자를 담는다.
// 2. while 문으로 방문할 노드가 비지 않을 때까지 반복한다. (다음을)
// 3. queue방식을 사용하기 때문에 방문할 노드에서 제일 처음 노드를 빼서 주인공노드로 선언해준다. (shift()사용)
// 4. 만약 그 주인공노드가 방문한 노드 배열에 담긴게 아니라면 방문한 노드 배열에 담아준다. (방문 완료)
// 5. 방문할 노드 배열은 그래프의 ***해당 주인공노드의 값과 기존의 방문할 노드들***로 재선언된다. (해당 주인공노드의 값 = 주인공노드의 자식 노드들 혹은 부모 노드인데 부모 노드는 어차피 if 문에서 걸러질 것)

const BFS = (graph, startNode) => {
  let visited = [];
  let unvisited = [];

  unvisited.push(startNode);

  while (unvisited.length !== 0) {
    const node = unvisited.shift();

    if (!visited.includes(node)) {
      visited.push(node);
      unvisited = [...unvisited, ...graph[node]];
    }
  }

  return visited;
};
/* BFS를 말로 풀어쓰자면 다음과 같다 */
// 준비물 : 그래프와 시작노드의 인자가 필요하고, 방문한 노드를 담을 배열과 방문할 노드를 담을 배열이 필요하다.
// 1. 방문할 노드에 시작 인자를 담는다.
// 2. while 문으로 방문할 노드가 비지 않을 때까지 반복한다. (다음을)
// 3. queue방식을 사용하기 때문에 방문할 노드에서 제일 처음 노드를 빼서 주인공노드로 선언해준다. (shift()사용)
// 4. 만약 그 주인공노드가 방문한 노드 배열에 담긴게 아니라면 방문한 노드 배열에 담아준다. (방문 완료)
// 5. 방문할 노드 배열은 ***기존의 방문할 노드들과 그래프의 해당 주인공노드의 값***으로 재선언된다. (해당 주인공노드의 값 = 주인공노드의 자식 노드들 혹은 부모 노드인데 부모 노드는 어차피 if 문에서 걸러질 것)

console.log(DFS(graph, "A"));
console.log(BFS(graph, "A"));

/* DFS와 BFS의 차이는 5번 unvisited에 어떤 순서로 담을거냐가 중요한 포인트이자 유일한 차이점이었다. */
