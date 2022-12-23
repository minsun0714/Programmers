// 나의 풀이
function solution(numlist, n) {
  return (distance = numlist
    .map((v) => v - n)
    .sort((a, b) =>
      Math.abs(a) - Math.abs(b) === 0 ? b - a : Math.abs(a) - Math.abs(b)
    )
    .map((v) => v + n));
}
console.log(solution([1, 2, 3, 4, 5, 6], 4));

// 남의 풀이
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
console.log(solution([1, 2, 3, 4, 5, 6], 4));
