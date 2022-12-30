function solution(dartResult) {
  const withPrize = dartResult
    .split("S")
    .join("|")
    .split("D")
    .join("|")
    .split("T")
    .join("|")
    .split("|");
  console.log(withPrize);
  const elimPrize = dartResult.split("*").join("").split("#").join("");

  const elimSDT = elimPrize
    .split("S")
    .join("|")
    .split("D")
    .join("|")
    .split("T")
    .join("|")
    .split("|");
  elimSDT.pop();

  const SDT = elimPrize
    .split("")
    .filter((v) => v === "S" || v === "D" || v === "T");

  const totalBeforePrize = elimSDT.map((v, i) =>
    SDT[i] === "D"
      ? Math.pow(v, 2)
      : SDT[i] === "T"
      ? Math.pow(v, 3)
      : Number(v)
  );
  if (elimPrize === dartResult)
    return totalBeforePrize.reduce((s, v) => (s += v), 0);

  const starCurrentRoundApplied = totalBeforePrize.map((v, i) =>
    withPrize[i + 1][0] === "*" ? 2 * v : v
  );

  let arr = [];
  for (let v of withPrize) v[0] === "*" ? arr.push(2) : arr.push(1);
  arr.shift();
  arr.shift();

  const starWholeRoundsApplied = starCurrentRoundApplied.map((v, i) =>
    arr[i] === 2 ? 2 * v : v
  );

  const sharpApplied = starWholeRoundsApplied.map((v, i) =>
    withPrize[i + 1][0] === "#" ? v * -1 : v
  );

  return sharpApplied.reduce((s, v) => (s += v), 0);
}
console.log(solution("1S2D*3T")); // whole에서 2배가 되어버림
console.log(solution("1D2S#10S"));
console.log(solution("1D2S0T"));
console.log(solution("1S*2T*3S"));
