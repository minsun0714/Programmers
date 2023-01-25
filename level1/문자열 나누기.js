// 나의 코드
function solution(s) {
  let arr = [];
  let [firstLetter, lastIndex, same, dif] = [s[0], 0, 0, 0];
  s.split("").forEach((v, i, a) => {
    v === firstLetter ? same++ : dif++;
    if (same === dif) {
      arr.push(s.substring(lastIndex, i + 1));
      [firstLetter, lastIndex, same, dif] = [a[i + 1], i + 1, 0, 0];
    }
  });
  return arr.join("").length === s.length ? arr.length : arr.length + 1;
}

//다른 코드
function solution(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split("");
  let countSame = 1;
  let countDif = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countDif++;
    if (countSame === countDif) break;
  }
  return solution(rest.slice(i + 1).join(""), count + 1);
}
console.log(solution("banana"));
