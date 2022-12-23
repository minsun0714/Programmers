function solution(my_string) {
  const s = my_string.split(" ");
  const nums = s
    .map((v, index) => (s[index - 1] === "-" ? parseInt(v * -1) : parseInt(v)))
    .filter((w) => w);
  return nums.reduce((s, v) => (s += v), 0);
}
console.log(solution("1 - 100 + 22"));
