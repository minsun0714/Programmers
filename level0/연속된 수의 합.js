//나의 풀이
function solution(num, total) {
  const initial = [...Array(num)].map((v, i) => i + total);
  let initialTotal = initial.reduce((s, v) => (s += v), 0);
  let counter = 0;
  while (initialTotal > total) {
    initialTotal -= num;
    counter++;
  }
  return initial.map((v) => v - counter);
}

// 등차수열의 합 공식 이용
function solution(num, total) {
  const a = ((2 * total) / num + 1 - num) / 2;
  return Array(num)
    .fill()
    .map((_, i) => i + a);
}
