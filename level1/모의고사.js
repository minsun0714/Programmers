//나의 풀이
function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const scores = [
    scoring(answers, p1),
    scoring(answers, p2),
    scoring(answers, p3),
  ];
  const wins = scores.map((v, i) => (v !== Math.max(...scores) ? 0 : i + 1));
  return wins.filter((v) => v);
}

function scoring(answers, p) {
  return answers.filter((v, i) => v === p[i % p.length]).length;
}

console.log(solution([1, 2, 3, 4, 5]));
