//나의 풀이
function solution(n) {
  let counter = 0;
  for (
    let i = 0;
    i < n;
    counter % 3 === 0 || (counter + "").split("").includes("3") ? i : i++
  ) {
    counter++;
    counter % 3 === 0 ? counter++ : null;
    (counter + "").split("").includes("3") ? counter++ : null;
  }
  return counter;
}

//다른 풀이
function solution(n) {
  return [...Array(100)]
    .map((v, i) => (v = i + 1))
    .filter((num) => num % 3 !== 0 && !num.toString().includes("3"))[n - 1];
}
console.log(solution(40));
