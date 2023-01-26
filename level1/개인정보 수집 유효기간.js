// 나의 코드
function solution(today, terms, privacies) {
  const mapTerms = new Map();
  for (let term of terms)
    mapTerms.set(term.split(" ")[0], Number(term.split(" ")[1]));
  const PrivaciesWithTerms = privacies.map((v) => [
    v.split(" ")[0].split(".").map(Number),
    mapTerms.get(v.split(" ")[1]),
  ]);

  const expired = PrivaciesWithTerms.map(([[y, m, d], t]) => {
    const [ey, em, ed] = [y + parseInt(t / 12), m + (t % 12), d];
    if (em > 12) return [ey + parseInt(em / 12), em % 12, ed];
    return [ey, em, ed];
  });

  let ans = [];
  let index = 0;
  const [ty, tm, td] = today.split(".").map(Number);
  for (let [ey, em, ed] of expired) {
    index++;
    if (
      ey < ty ||
      (ey === ty && em < tm) ||
      (ey === ty && em === tm && ed <= td)
    )
      ans.push(index);
  }
  return ans;
}
console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

// 다른 코드
function solution(today, terms, privacies) {
  var answer = [];
  var [year, month, date] = today.split(".").map(Number);
  var todates = year * 12 * 28 + month * 28 + date;
  var t = {};
  terms.forEach((e) => {
    let [a, b] = e.split(" ");
    t[a] = Number(b);
  });
  privacies.forEach((e, i) => {
    var [day, term] = e.split(" ");
    day = day.split(".").map(Number);
    var dates = day[0] * 12 * 28 + day[1] * 28 + day[2] + t[term] * 28;
    if (dates <= todates) answer.push(i + 1);
  });
  return answer;
}
