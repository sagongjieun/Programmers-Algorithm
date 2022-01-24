function solution(name) {
    let count = 0;
    const alphabetFromA = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'];
    const alphabetFromZ = ['A', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O']; //index 맞추기 위해 맨 앞에 A추가
    
    //조이스틱 상하 count
    for (let i=0; i<name.length; i++) {
        if (alphabetFromA.includes(name[i])) {
            count = count + Math.abs(alphabetFromA.indexOf(`${name[i]}`) - alphabetFromA.indexOf('A'));
        }
        else if (alphabetFromZ.includes(name[i])) {
            count = count + Math.abs(alphabetFromZ.indexOf(`${name[i]}`) - alphabetFromZ.indexOf('A'));
        }
    }
    //조이스틱 좌우 count
    for (let i=1; i<name.length; i++) {
        if (name[i] === 'A') {
            count += 0;
        }
        else count++;
    }
    
    return count;
}

const name = "AAAJA";
console.log(solution(name));

//초기값 : AAA
//미완성