//나의 풀이
function solution(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    //n을 n 이하의 자연수로 모두 나눠보고, n의 약수이면서 동시에 소수이면 빈 배열에 넣기
    (n / i === parseInt(n / i)) & (sosu(i) === true) ? arr.push(i) : null;
  }
  return arr;
}
console.log(solution(12));

// 특정 숫자가 소수인지 불리언 값을 반환하는 함수를 별도로 설정
function sosu(x) {
  let counter = 0;
  for (let j = 2; j <= x; j++) {
    x / j === parseInt(x / j) ? counter++ : null;
  }
  return counter === 1 ? true : false;
}
console.log(sosu());

//남의 풀이
function solution(n) {
  // 소인수들을 빈 배열에 담음.
  var answer = [];
  // 6이 3의 약수이므로 while문 통과 -> 빈 배열에 3 push
  for (let i = 2; i <= n; i++) {
    // 12/2의 나머지가 0이면 2가 12의 약수라는 의미이므로 while문 통과
    while (n % i === 0) {
      // 빈 배열에 약수인 2를 넣고
      answer.push(i);
      // n을 약수로 나누어 준 값(=6)으로 다시 for문 돌림. 이 때 6을 3으로 나눔.
      n = n / i;
    }
  }
  //for문이 끝나면 소인수들의 배열이 남음. 중복 제거는 되어있지 않으므로
  //중복된 소인수들을 set에 넣어 중복 제거 후 배열로 반환
  return [...new Set(answer)];
}
console.log(solution(12));
