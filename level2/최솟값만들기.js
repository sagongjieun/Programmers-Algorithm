function solution(A,B){
    let acc = 0;
    A = A.sort((a,b)=>(a-b)); //1 2 4 배열 하나는 오름차순 정렬
    B = B.sort((a,b)=>(b-a)); //4 4 5 나머지 하나는 내림차순 정렬
    for (let i=0; i<A.length; i++) {
        acc += A[i]*B[i]; //각 index별 숫자들을 곱한 값을 누적
    }
    return acc;
}

const A = [1, 4, 2];
const B = [5, 4, 4];
console.log(solution(A,B)); //29