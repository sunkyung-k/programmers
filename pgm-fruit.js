//school.programmers.co.kr/learn/courses/30/lessons/135808?language=javascript
// 프로그래머스 코딩테스트 - 과일 장수 javascript
function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);

  const temp = [];
  const newArr = [];
  for (let i = 0; i < sortScore.length; i++) {
    temp.push(sortScore[i]);
    if (temp.length === m) {
      newArr.push(temp.slice());
      temp.length = 0;
    }
  }

  let sum = 0;
  for (let i = 0; i < newArr.length; i++) {
    sum += newArr[i][m - 1] * m;
  }
  return sum;
}
