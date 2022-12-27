//나의 코드
function solution(s) {
  const num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let v of num) s = s.replaceAll(v, num.indexOf(v));
  return parseInt(s);
}

//다른 코드
function sol(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
  }

  return Number(answer);
}
console.log(sol("one4seveneight"));
console.log("one4seveneight".split("one").join(1));

//정규표현식 풀이 추가하자.
