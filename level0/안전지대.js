//나의 코드
function solution(board) {
  const leftRight = board.map((v) =>
    v.map((w, i, a) => (a[i + 1] === 1 || a[i - 1] === 1 ? 1 : w))
  );
  const risky = leftRight.map((v, i) =>
    v
      .map((w, j) =>
        w === 1
          ? [
              [i, j],
              [i - 1, j],
              [i + 1, j],
            ]
          : w
      )
      .flat()
  );
  let feas = [];
  for (let v of risky) {
    for (let w of v) {
      w !== 0 ? feas.push(w) : null;
    }
  }
  let ans = [];
  for (let v of feas)
    (v[0] >= 0) & (v[0] < board.length) ? ans.push(String(v)) : null;
  const boardSize = Math.pow(board.length, 2);
  return boardSize - [...new Set(ans)].length;
}
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);

//모범 코드
function solution(board) {
  let outside = [
    [-1, 0],
    [-1, -1],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, 0],
    [1, -1],
    [1, 1],
  ];
  let safezone = 0;

  board.map((row, y, self) =>
    row.map((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
        ? false
        : safezone++;
    })
  );

  return safezone;
}
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
);
