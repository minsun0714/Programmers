function solution(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) arr.push(arr.slice(-2)[0] + arr.slice(-2)[1]);
  return arr[n];
}
console.log(Number.MAX_SAFE_INTEGER);
console.log(solution(78));
console.log(solution(78) > Number.MAX_SAFE_INTEGER);
console.log(solution(78) === 8944394323791464);

console.log(Number.MAX_SAFE_INTEGER);
console.log(solution(79));
console.log(solution(79) > Number.MAX_SAFE_INTEGER);
console.log(solution(78) === 14472334024676221);
console.log();
