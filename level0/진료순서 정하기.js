//나의 풀이
function solution(emergency) {
  return emergency.map((v) => emergency.filter((x) => x > v).length + 1);
}
console.log(solution([3, 76, 24]));

//남의 풀이 (slice의 역할 중요⭐️)
function solution(emergency) {
  let sorted = emergency.slice().sort((a, b) => b - a);
  console.log(emergency.slice());
  return emergency.map((v) => sorted.indexOf(v) + 1);
}
console.log(solution([3, 76, 24]));
