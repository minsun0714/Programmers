// 나의 코드
function solution(priorities, location) {
  let order = [];
  let withInitialIdx = priorities.map((v, i) => [v, i]);

  for (let v of priorities) {
    let [first, ...rest] = withInitialIdx;
    let max_Rest = Math.max(...rest.map(([v, i]) => v));

    if (first[0] < max_Rest) {
      let max_Idx = rest.findIndex(([v, i]) => v === max_Rest);
      order.push(...rest.splice(max_Idx, 1));
      withInitialIdx = [
        ...rest.slice(max_Idx),
        first,
        ...rest.slice(0, max_Idx),
      ];
    } else {
      order.push(first);
      withInitialIdx = rest;
    }
    if (order[order.length - 1][1] === location) break;
  }
  return order.length;
}

//다른 코드
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
console.log(solution([2, 1, 3, 2], 2));
