//나의 풀이
function gcd(a, b) {
  return a % b ? gcd(b, a % b) : b;
}

function solution(a, b) {
  //유클리드 호제법으로 최대공약수 구해서 기약분수의 분모 구함.
  let num = b / gcd(a, b);
  // 소인수분해해서 배열에 담음.
  let arr = [];
  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      arr.push(i);
      num = num / i;
    }
  }
  // 소인수가 2도 아니고 5도 아닌 애들만 추렸을 때 배열 길이 0일 경우 1 반환.
  return arr.filter((v) => (v !== 2) & (v !== 5)).length === 0 ? 1 : 2;
}
console.log(solution(7, 20));

// 참고한 풀이
function solution(a, b) {
  //  for문과 if문으로 최대공약수 n을 구함.
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) n = i;
  }
  // 분모의 소인수가 2와 5만 있는지 확인하면 되므로
  b /= n;
  // 2로 나누어 떨어질 때까지 나누고
  while (b % 2 === 0) b /= 2;
  // 5로 나누어 떨어질 때까지 나누고
  while (b % 5 === 0) b /= 5;
  // 소인수가 2,5 밖에 없으면 b가 1이된다는 점을 이용함.
  return b === 1 ? 1 : 2;
}
