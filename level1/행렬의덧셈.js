function solution(arr1, arr2) {
    // let answer = [];
    
    // for (let i=0; i<arr1.length; i++) {
    //     let tmp = [];
    //     for (let j=0; j<arr1[i].length; j++) {
    //         tmp.push(arr1[i][j]+arr2[i][j]);
    //     }
    //     answer.push(tmp);
    // }
    // return answer;

    //다른 방법1)
    // return arr1.map((element, i) => arr2[i].map((e, j) => arr1[i][j] + arr2[i][j]));

    //다른 방법2)
    let answer = [[]];
    
    for (let i=0; i<arr1.length; i++) {
        answer[i] = []; //tmp배열을 새로 만드는대신
        for (let j=0; j<arr1[i].length; j++) {
            answer[i].push(arr1[i][j]+arr2[i][j]);
        }
    }
    return answer;
}

const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];
console.log(solution(arr1, arr2)); //[[4,6],[7,9]]