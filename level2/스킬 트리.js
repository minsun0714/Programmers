//나의 코드
function solution(skill, skill_trees) {
  const sklOnly = skill_trees.map((skill_tree) =>
    skill_tree.split("").filter((letter) => skill.includes(letter))
  );
  const treeIdx = sklOnly.map((skill_tree) =>
    skill_tree.map((v) => skill.indexOf(v))
  );
  let count = 0;
  for (let v of treeIdx) orderCheck(v) ? count++ : count;
  return count;
}

function orderCheck(v) {
  if (v.join("") !== v.sort((a, b) => a - b).join("")) return;
  let temp = 0;
  for (let i of v) {
    if (i > temp) return;
    temp++;
  }
  return true;
}

//다른 코드
function solution(skill, skill_trees) {
  function isCorrect(n) {
    let test = skill.split("");
    for (var i = 0; i < n.length; i++) {
      if (!skill.includes(n[i])) continue;
      if (n[i] === test.shift()) continue;
      return false;
    }
    return true;
  }

  return skill_trees.filter(isCorrect).length;
}
console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
