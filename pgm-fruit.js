function solution(k, m, score) {
  const sortScore = score.sort((a, b) => b - a);

  // 개수가 안맞아서 버려야 할 때
  // if (score.length % m !== 0) {
  //     const floorFilter = sortScore.filter(item => item !== sortScore[0]);
  //     const min = floorFilter.filter(item => item === floorFilter[0]);
  //     console.log(min);
  //     return floorFilter[0] * m * 1;
  // }

  // 개수가 딱 맞을 때
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
