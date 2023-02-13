// 나의 코드
function solution(n, left, right) {
  const totalEls = right - left + 1;
  let [i, j] = [parseInt(left / n), left % n];

  let arr = [];
  while (arr.length < totalEls) {
    arr.push(i >= j ? i + 1 : j + 1);

    if (j === n - 1) {
      j = 0;
      i++;
    } else j++;
  }
  return arr;
}
//다른 코드
function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1);
  }

  return answer;
}
console.log(solution(3, 2, 5));
