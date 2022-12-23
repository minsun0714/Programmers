// function solution(polynomial) {
//   const poly = polynomial.split(" ");
//   let arrayX = [];
//   let arrayParam = [];
//   for (let v of poly)
//     if ((v.indexOf("x") !== -1) & (v !== "+")) {
//       arrayX.push(v);
//     } else if ((v.indexOf("x") === -1) & (v !== "+")) {
//       arrayParam.push(v);
//     }
//   const a = arrayX
//     .map((item) =>
//       item.split("")[0] === "x" ? 1 : Number(item.replace("x", ""))
//     )
//     .reduce((s, v) => (s += v), 0);
//   const b = arrayParam.reduce((s, v) => (s += Number(v)), 0);
//   if (a === 0) {
//     return String(b);
//   }

//   return b === 0
//     ? "ax".replace("a", a === 1 ? "" : a)
//     : "ax + b".replace("b", b).replace("a", a === 1 ? "" : a);
// }
// console.log(solution("x + 7"));

// 리팩토링
function solution(polynomial) {
  const poly = polynomial.split(" + ");
  let coX = [];
  let param = [];
  for (let v of poly) v.indexOf("x") !== -1 ? coX.push(v) : param.push(v);

  const a = coX
    .map((item) =>
      item.split("")[0] === "x" ? 1 : Number(item.replace("x", ""))
    )
    .reduce((s, v) => (s += v), 0);
  const b = param.reduce((s, v) => (s += Number(v)), 0);
  //
  return a === 0
    ? String(b)
    : b === 0
    ? "ax".replace("a", a === 1 ? "" : a)
    : "ax + b".replace("b", b).replace("a", a === 1 ? "" : a);
}
console.log(solution("2"));
