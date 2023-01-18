//나의 코드
function solution(participant, completion) {
  const [freqPar, freqCom] = [freq(participant), freq(completion)];
  let ans = [];
  for (let v of participant) freqPar[v] !== freqCom[v] ? ans.push(v) : null;
  return ans[0];
}

function freq(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
}

// 다른 코드 (객체 이용)
function sol(participant, completion) {
  const dic = completion.reduce(
    (obj, t) => ((obj[t] = obj[t] ? obj[t] + 1 : 1), obj),
    {}
  );
  console.log(dic);
  return participant.find((t) => {
    if (dic[t]) dic[t] = dic[t] - 1;
    else return true;
  });
}

// 다른 코드 (map 이용)
function slt(participant, completion) {
  const map = new Map();
  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  console.log(map.get("mislav"));

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}
console.log(
  slt(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
);
