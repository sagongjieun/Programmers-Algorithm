function solution(nums) {
    let num = nums.length/2; //num개만큼 가져갈 수 있음
    const set = new Set(nums);
    return set.size >= num ? num : set.size;
}

const nums = [3,3,3,2,2,2];
console.log(solution(nums)); //2