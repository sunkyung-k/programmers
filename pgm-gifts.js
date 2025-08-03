// https://school.programmers.co.kr/learn/courses/30/lessons/258712?language=javascript
// 프로그래머스 코딩테스트 - 가장 많이 받은 선물 javascript
function solution(friends, gifts) {
  // 선물 주고받은 횟수 + 선물 주고받은 지수
  const newGifts = gifts.flatMap((str) => str.split(" "));
  const to = []; // 받은 사람
  const from = []; // 준 사람

  // idx 기준으로 to, from 구분
  newGifts.forEach((_, idx) => {
    idx % 2 === 0 || idx === 0 ? from.push(newGifts[idx]) : to.push(newGifts[idx]);
  });

  // 주고받은 기록
  const g = [];
  for (let i = 0; i < to.length; i++) {
    g.push({ to: to[i], from: from[i] });
  }

  // 이름 => 인덱스 변경
  const nameToIdx = {};
  friends.forEach((name, idx) => {
    nameToIdx[name] = idx;
  });

  const n = friends.length;

  // 선물 주고받은 기록 배열
  const giveMap = Array.from({ length: n }, () => Array(n).fill(0));

  // 각 사람이 총 몇 번 선물 줬는지 / 받았는지
  const giveCount = Array(n).fill(0);
  const receiveCount = Array(n).fill(0);

  // g 배열로 부터 반영
  g.forEach(({ from, to }) => {
    const fromIdx = nameToIdx[from]; // 준 사람 idx
    const toIdx = nameToIdx[to]; // 받은 사람 idx

    giveMap[fromIdx][toIdx]++; // 선물 준 횟수 기록
    giveCount[fromIdx]++; // 총 몇 번 줬는지
    receiveCount[toIdx]++; // 총 몇 번 받았는지
  });

  // 선물 지수 = 준 수 - 받은 수
  const score = [];
  for (let i = 0; i < n; i++) {
    score[i] = giveCount[i] - receiveCount[i];
  }

  // 다음 달에 받을 선물 수 저장 배열
  const nextGifts = Array(n).fill(0);

  // 모든 친구 짝 비교
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue; // 자기 자신 비교 패스

      const aToB = giveMap[i][j]; // i가 j에게 준 선물 수
      const bToA = giveMap[j][i]; // j가 i에게 준 선물 수

      if (aToB > bToA) {
        // i가 더 많이 줬으면
        nextGifts[i]++; // i가 다음 달에 하나 받음
      } else if (aToB === bToA && score[i] > score[j]) {
        // 주고받은 수 같을 땐 선물 지수 비교
        nextGifts[i]++;
      }
    }
  }

  // 가장 많이 받은 선물 수
  return Math.max(...nextGifts);
}
