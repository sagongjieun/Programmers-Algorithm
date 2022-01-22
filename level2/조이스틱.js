function solution(name) {
    let count = 0;
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    console.log(Math.abs(alphabet.indexOf('A') - alphabet.indexOf('Z')));
    
    /*
    for (let i=0; i<name.length; i++) {
        if (name[i] !== 'A') {

        }
        else {
            
        }
    }
    */
    return count;
}

const name = "JAN";
console.log(solution(name)); // 56

//초기값 : AAA