function solution(s){
    const count_p = s.match(/p|P/g); //p의 개수 , /p/gi
    const count_y = s.match(/y|Y/g); //y의 개수 , /y/gi
    if ((!count_p) && (!count_y)) return true;
    else if ((!count_p) || (!count_y)) return false;
    else return (count_p.length === count_y.length) ? true : false;
}

const s = "asdf";
console.log(solution(s));