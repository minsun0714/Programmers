// 나의 코드
function solution(s) {
  const noBrace = s.split("{{").join("").split("}}").join("");
  const arr = noBrace.split("},{").map((v) => v.split(","));
  arr.sort((a, b) => a.length - b.length);
  let tuple = [];
  arr.forEach((v, i, a) =>
    tuple.push(v.filter((num, j) => !a[i - 1]?.includes(num)).map(Number))
  );
  return tuple.flat();
}

//다른 코드1
function sol(s) {
  return JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"))
    .sort((a, b) => a.length - b.length)
    .reduce((arr, v, n) => {
      if (n) {
        return arr.concat(v.filter((f) => !arr.includes(f)));
      }
      return v;
    }, []);
}

//다른 코드2
const solution2 = (s) => tupple(changeMatrix(getSets(s)));

const getSets = (s) => {
  const sets = s.match(/{[\d]+}/g);
  return sets
    .map((set) => set.match(/[\d]+,?/g).map((v) => parseInt(v)))
    .sort((a, b) => a.length - b.length);
};

const changeMatrix = (sets) => sets.reduce((_, set) => _.concat(set), []);

const tupple = (arr) => [
  ...arr.reduce((set, value) => set.add(value), new Set()),
];
