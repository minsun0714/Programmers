//나의 풀이
function solution(lines) {
  const [s0, e0] = lines[0];
  const [s1, e1] = lines[1];
  const [s2, e2] = lines[2];
  const linesArr = [btw(s0, e0), btw(s1, e1), btw(s2, e2)]
    .flat()
    .sort((a, b) => a - b)
    .filter((v, i, a) => v === a[i + 1]);
  return [...new Set(linesArr)].length;
}
function btw(s, e) {
  let arr = [];
  for (let i = s; i < e; i++) {
    arr.push(i);
  }
  return arr;
}

//다른 풀이
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
    for (; a < b; a++) line[a + 100]++;
  });

  return line.reduce((s, v) => (v > 1 ? s + 1 : s), 0);
}
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
);
