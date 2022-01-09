function solution(board, moves) {
    let answer = 0; //스택에서 연속된 숫자를 삭제할때 count
    let basket = []; //인형을 담을 스택
    let col, row, move, doll;

    for (col=0; col<moves.length; col++) {
        move = moves[col]-1; //idx번호 맞추기 위해 -1

        for (row=0; row<board.length; row++) { //열은 move로 고정돼있으므로 각 행을 보기만 하면 됨
            doll = board[row][move];

            if (doll !== 0) {
                board[row][move] = 0; //값을 0으로 변경

                if (basket.length !== 0 && basket[basket.length-1] === doll) { //바구니가 비어있지 않고 인형이 바구니에 들어있는 마지막 인형과 같다면
                    basket.pop(); //인형 터뜨리고
                    answer += 2; //count 2번 올리기
                }
                else {
                    basket.push(doll);
                }

                break;
            }
        }
    }

    return answer;
}

const board = [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
    ];

const moves = [1,5,3,5,1,2,1,4];
const result = solution(board, moves);
console.log(result);