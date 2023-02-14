// 나의 코드
function solution(n, a, b) {
  let players = [...Array(n)].map((_, i) => i + 1);
  let [g1, g2] = [
    players.slice(0, players.length / 2),
    players.slice(players.length / 2),
  ];
  while (true) {
    if (
      (g1.includes(a) && g2.includes(b)) ||
      (g1.includes(b) && g2.includes(a))
    )
      break;
    else if (g1.includes(a) && g1.includes(b)) {
      players = g1;
      [g1, g2] = [
        players.slice(0, players.length / 2),
        players.slice(players.length / 2),
      ];
    } else {
      players = g2;
      [g1, g2] = [
        players.slice(0, players.length / 2),
        players.slice(players.length / 2),
      ];
    }
  }
  const playersL = [g1, g2].flat().length;
  return Math.log2(playersL);
}

// 다른 코드
function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    console.log([a, b]);
    answer++;
  }

  return answer;
}
console.log(solution(10, 8, 9));
