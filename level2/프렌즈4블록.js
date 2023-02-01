function solution(m, n, board) {
  let tilted = [];
  for (let i = 0; i < n; i++) {
    let line = [];
    for (let j = 1; j <= m; j++) {
      line.push(board[m - j][i]);
    }
    tilted.push(line);
  }
  const ans = rounds(tilted, m)
    .reduce((acc, cur) => acc + cur, "")
    .match(/[*]/g);

  return !ans ? 0 : ans.length;
}

function rounds(tilted, m) {
  let isNotOver = 0;
  const dirs = [
    [0, 1],
    [1, 0],
    [1, 1],
  ];
  tilted = tilted.map((line, i, a) =>
    line.map((block, j) => {
      let count = 0;
      for (let [x, y] of dirs) if (block !== a[i + x]?.[j + y]) count++;
      if (block !== "*" && count === 0) isNotOver++;
      if (count > 0) return tilted[i][j];
    })
  );
  if (!isNotOver) return tilted.map((v) => v.join("").padEnd(m, "*"));

  const round = tilted.map((line, i, a) =>
    line.filter((block, j, line) =>
      (!line[j - 1] && j > 0) ||
      (!a[i - 1]?.[j] && i > 0) ||
      (!a[i - 1]?.[j - 1] && i > 0 && j > 0)
        ? null
        : block
    )
  );

  return rounds(
    round.map((v) => v.join("").padEnd(m, "*").split("")),
    m
  );
}
console.log(solution(4, 4, ["ABCD", "ABCD", "ABCD", "ABCD"]));
