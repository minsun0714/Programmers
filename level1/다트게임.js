// function solution(dartResult) {
//   const withPrize = dartResult
//     .split("S")
//     .join("|")
//     .split("D")
//     .join("|")
//     .split("T")
//     .join("|")
//     .split("|");
//   console.log(withPrize);
//   const elimPrize = dartResult.split("*").join("").split("#").join("");

//   const elimSDT = elimPrize
//     .split("S")
//     .join("|")
//     .split("D")
//     .join("|")
//     .split("T")
//     .join("|")
//     .split("|");
//   elimSDT.pop();

//   const SDT = elimPrize
//     .split("")
//     .filter((v) => v === "S" || v === "D" || v === "T");

//   const totalBeforePrize = elimSDT.map((v, i) =>
//     SDT[i] === "D"
//       ? Math.pow(v, 2)
//       : SDT[i] === "T"
//       ? Math.pow(v, 3)
//       : Number(v)
//   );
//   if (elimPrize === dartResult)
//     return totalBeforePrize.reduce((s, v) => (s += v), 0);

//   const starCurrentRoundApplied = totalBeforePrize.map((v, i) =>
//     withPrize[i + 1][0] === "*" ? 2 * v : v
//   );

//   let arr = [];
//   for (let v of withPrize) v[0] === "*" ? arr.push(2) : arr.push(1);
//   arr.shift();
//   arr.shift();

//   const starWholeRoundsApplied = starCurrentRoundApplied.map((v, i) =>
//     arr[i] === 2 ? 2 * v : v
//   );

//   const sharpApplied = starWholeRoundsApplied.map((v, i) =>
//     withPrize[i + 1][0] === "#" ? v * -1 : v
//   );

//   return sharpApplied.reduce((s, v) => (s += v), 0);
// }
// console.log(solution("1S2D*3T")); // whole에서 2배가 되어버림
// console.log(solution("1D2S#10S"));
// console.log(solution("1D2S0T"));
// console.log(solution("1S*2T*3S"));

function solution(dartResult) {
  const d = dartResult.split("");
  const nums = d
    .map((v) => Number(v))
    .join("")
    .split(NaN)
    .filter((w) => w !== "");
  const SDT = d.filter((v) => v === "S" || v === "D" || v === "T");
  const prize = [...d, " "]
    .map((v, i, a) =>
      SDT.includes(a[i - 1]) ? (!isNaN(v) ? "no prize" : v) : null
    )
    .filter((v) => v);
  const appliedSDT = nums.map((v, i) =>
    SDT[i] === "S"
      ? Number(v)
      : SDT[i] === "D"
      ? Math.pow(v, 2)
      : Math.pow(v, 3)
  );
  const acha = appliedSDT.map((v, i) => (prize[i] === "#" ? v * -1 : v));
  const starThisRound = acha.map((v, i) => (prize[i] === "*" ? v * 2 : v));
  const starNextRound = starThisRound.map((v, i) =>
    prize[i + 1] === "*" ? v * 2 : v
  );

  return starNextRound.reduce((s, v) => s + v, 0);
}
console.log(solution("1S2D*3T"));

// 정규표현식

const dart = "10S2D*3T";
const numArray = dart.replace(/[^0-9]/g, " ");
const strArray = dart.replace(/[0-9]/g, "");
const reg = dart.split(/[SDT*#]/g);

console.log(numArray);
console.log(strArray);
console.log(reg);
