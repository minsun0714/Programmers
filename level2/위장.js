function solution(clothes) {
  const clths = clothes.map(([_, key]) => key);
  const freq = Object.values(
    clths.reduce((acc, clothType) => {
      acc[clothType] ? acc[clothType]++ : (acc[clothType] = 1);
      return acc;
    }, {})
  );
  let plus1 = freq.map((v) => (v += 1));
  return plus1.reduce((acc, cur) => acc * cur, 1) - 1;
}
console.log(
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
