function solution(citations) {
    const len = citations.length;
    citations = citations.sort((a,b) => (a-b)); //오름차순 정렬
    let middleIndex = citations.length / 2 - 1; //중간값 idx, idx니까 -1
    let middle = citations[Math.ceil(middleIndex)];
    
    while (true) {
        let idx = 0;

        if (len % 2 !== 0) {
            if (citations[len-1] - citations[middleIndex] + 1 >= middle) {
                return middle;
            }
            else {
                middle = citations[middleIndex-1];
                middleIndex--;
            }
        }
        else {
            middle = citations[middleIndex+1];
            middleIndex++;

            if (citations[len-1] - citations[middleIndex] + 1 >= middle) {
                return middle;
            }
            else {
                middle = citations[middleIndex-1];
                middleIndex--;
            }
        }
    }
}

const citations = [3,0,6,1,5];
console.log(solution(citations)); //3

// 문제 이해 : 정수가 n개 담긴 배열에서 어떠한 숫자 x보다 높은 정수들이 x개 이상이고 나머지 개수는 x이하일 때, 그 x의 최대값을 구하는 문제
// 정렬문제

// 0 1 3 5 6