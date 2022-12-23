//나의 풀이
function solution(before, after) {
  for (let i = 0; i < after.length; i++) before = before.replace(after[i], "");
  return before === "" ? 1 : 0;
}
console.log(solution("aelpp", "apple"));

//남의 풀이
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}
console.log(solution("aelpp", "apple"));
