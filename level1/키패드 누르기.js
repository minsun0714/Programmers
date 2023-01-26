function solution(numbers, hand, fingerL = "*", fingerR = "#", ans = "") {
  const [h, L, R] = [hand[0].toUpperCase(), [1, 4, 7], [3, 6, 9]];
  let cur = numbers[0];

  if (L.includes(cur)) {
    ans += "L";
    fingerL = cur;
  } else if (R.includes(cur)) {
    ans += "R";
    fingerR = cur;
  } else {
    ans += distance([fingerL, fingerR], cur, h);
    distance([fingerL, fingerR], cur, h) === "L"
      ? (fingerL = cur)
      : (fingerR = cur);
  }

  numbers.splice(0, 1);
  if (numbers.length === 0) return ans;
  return solution(numbers, hand, fingerL, fingerR, ans);
}

function distance([L, R], cur, h) {
  const keypads = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  let [[iL, jL], [iR, jR], [iCur, jCur]] = [[], [], []];
  for (let v of keypads)
    if (v.includes(L)) [iL, jL] = [keypads.indexOf(v), v.indexOf(L)];
  for (let v of keypads)
    if (v.includes(R)) [iR, jR] = [keypads.indexOf(v), v.indexOf(R)];
  for (let v of keypads)
    if (v.includes(cur)) [iCur, jCur] = [keypads.indexOf(v), v.indexOf(cur)];
  let distanceFromL = Math.abs(iCur - iL) + Math.abs(jCur - jL);
  let distanceFromR = Math.abs(iCur - iR) + Math.abs(jCur - jR);
  return distanceFromL < distanceFromR
    ? "L"
    : distanceFromL === distanceFromR
    ? h
    : "R";
}
