//나의 코드
function solution(strings, n) {
  const sorted = strings.map((v) => v[n] + v).sort();
  return (res = sorted.map((i) => i.split("").splice(1).join("")));
}
console.log(solution(["sun", "bed", "car"], 1));

//localeCompare 활용
function solution(strings, n) {
  return strings.sort((a, b) =>
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n])
  );
}
console.log(solution(["sun", "bed", "car"], 1));
