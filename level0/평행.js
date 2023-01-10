function solution(dots) {
  dots.sort((a, b) => a[0] - b[0]);
  const line1 = ([w, x] = [dots[0], dots[1]]);
  const line2 = ([y, z] = [dots[2], dots[3]]);
  const res = x[1] > y[1] ? case1(line1, line2) : case2(line1, line2);
  return res ? 1 : 0;
}
console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);

function case1(line1, line2) {
  const p1 = [Math.max(w[0], x[0]), Math.min(w[1], x[1])];
  const p2 = [Math.max(y[0], z[0]), Math.min(y[1], z[1])];
  const angle1 = (x[1] - p1[1]) / (p1[0] - w[0]);
  const angle2 = (z[1] - p2[1]) / (p2[0] - y[0]);
  const isLine1AndLine2parallel = angle1 === angle2;
  return isLine1AndLine2parallel;
}

function case2(line1, line2) {
  const p1 = [Math.min(w[0], x[0]), Math.min(w[1], x[1])];
  const p2 = [Math.min(y[0], z[0]), Math.min(y[1], z[1])];
  const angle1 = (w[1] - p1[1]) / (x[0] - p1[0]);
  const angle2 = (y[1] - p2[1]) / (z[0] - p2[0]);
  const isLine1AndLine2parallel = angle1 === angle2;
  return isLine1AndLine2parallel;
}
