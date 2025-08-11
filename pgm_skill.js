// https://school.programmers.co.kr/learn/courses/30/lessons/49993?language=javascript
// 프로그래머스 코딩테스트 - 스킬트리 javascript

// 1
function solution(skill, skill_trees) {
  let result = 0;
  for (let i = 0; i < skill_trees.length; i++) {
    let str = "";
    for (let j = 0; j < skill_trees[i].length; j++) {
      if (skill.includes(skill_trees[i][j])) {
        str += skill_trees[i][j];
      }
    }
    if (skill.indexOf(str) === 0) result++;
  }
  return result;
}

// 2
function solution(skill, skill_trees) {
  const result = skill_trees.map((tree) => {
    const str = tree
      .split("")
      .filter((item) => skill.includes(item))
      .join("");
    return skill.indexOf(str) === 0;
  });
  return result.filter((item) => item).length;
}
