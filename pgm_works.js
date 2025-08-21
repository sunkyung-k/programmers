// https://school.programmers.co.kr/learn/courses/30/lessons/12927?language=javascript
// 프로그래머스 코딩테스트 - 야근 지수 javascript
function solution(n, works) {
  const newArr = works.sort((a, b) => b - a);

  for (let i = 0; i < n; i++) {
    let max = newArr.shift();
    if (max > 0) max--;

    let idx = 0;
    while (idx < newArr.length && newArr[idx] > max) idx++;
    newArr.splice(idx, 0, max);
  }

  const result = newArr.reduce((acc, cur) => acc + cur ** 2, 0);
  return result;
}
