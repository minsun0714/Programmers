//나의 코드
function solution(babbling) {
  let arr = [];
  for (let v of babbling)
    arr.push(
      v
        .replaceAll("aya", "!")
        .replaceAll("ye", "@")
        .replaceAll("woo", "#")
        .replaceAll("ma", "%")
    );
  const filterAlphabet = arr.filter((v, i, a) => v === v.toUpperCase());
  return filterAlphabet.filter((v) => !v.match(/!!|@@|##|%%/g)).length;
}
console.log(solution(["aya", "yee", "u", "maa"]));

//다른 코드
// regexp1 : 얘네만 들어있나(중복방지는 안됨) ///^(aya|ye|woo|ma)+$/
// regexp2 : 중복되는 것이 들어있는가

function solution(babbling) {
  const regexp1 = /^(aya|ye|woo|ma)+$/;
  const regexp2 = /(aya|ye|woo|ma)\1+/;

  return babbling.reduce(
    (ans, word) => (regexp1.test(word) && !regexp2.test(word) ? ++ans : ans),
    0
  );
}
console.log(solution(["aya", "yee", "u", "maa"]));

// \1+과 {2}의 차이
console.log(/(aya|ye|woo|ma)\1+/.test("ayaye"));
console.log(/(aya|ye|woo|ma){2}/.test("ayaye"));

console.log(/(aya|ye|woo|ma)\1+/.test("yeye"));
console.log(/(aya|ye|woo|ma){2}/.test("yeye"));

console.log(/(aya|ye|woo|ma)\1+/.test("yemawoo"));
console.log(/(aya|ye|woo|ma){2}/.test("yemawoo"));

console.log(/(aya|ye|woo|ma)\1+/.test("ayaayaa"));
console.log(/(aya|ye|woo|ma){2}/.test("ayaayaa"));
