// Math.sqrt(7) ≒ 2.645
//소수 찾는 함수 (for문 활용)
// const isPrime = (num) => {
//   if (!num || num === 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// };
// // 소수 찾는 while문
// let start = 2;
// while (start <= Math.sqrt(num)) {
//   if (num % start++ < 1) {
//     return false;
//   }
// }

// 나의 코드
function solution(nums) {
  let el3 = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        el3.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  const sum = el3.map((v) => v.reduce((s, v) => s + v, 0));
  let count = 0;
  for (let v of sum) isPrime(v) ? count++ : null;
  return count;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(solution([1, 2, 7, 6, 4]));
