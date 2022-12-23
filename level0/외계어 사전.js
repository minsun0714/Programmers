function solution(spell, dic) {
  for (let v of spell) dic = dic.filter((item) => item.indexOf(v) !== -1);
  return dic.length === 0 ? 2 : 1;
}
console.log(
  solution(
    ["p", "o", "s"],
    ["ops", "opt", "sod", "eocd", "qixm", "adio", "soo"]
  )
);
