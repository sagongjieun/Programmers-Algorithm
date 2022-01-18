function solution(price, money, count) {
    let need = 0; //필요한 돈
    for (let i=1; i<=count; i++) need += price * i;
    return (need > money) ? (need - money) : 0;
}

const price = 3;
const money = 30;
const count = 4;
console.log(solution(price, money, count)); //10