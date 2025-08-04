// https://school.programmers.co.kr/learn/courses/30/lessons/389478?language=javascript
// 프로그래머스 코딩테스트 - 택배 상자 꺼내기 javascript

function solution(n, w, num) {
  const temp = [];
  const newArr = [];

  // 배열 생성
  for (let i = 1; i <= n; i++) {
    temp.push(i);
    if (temp.length === w) {
      newArr.push(temp.slice());
      temp.length = 0;
    }
  }

  // 마지막 층 빈칸에 0 추가
  if (temp.length > 0) {
    const emptyCount = w - temp.length;
    const padding = Array(emptyCount).fill(0);
    newArr.push([...temp, ...padding]);
  }

  // 복사본으로만 뒤집어서 방향 고려
  const updated = newArr.map((item, idx) =>
    idx % 2 === 1 ? [...item].reverse() : [...item]
  );

  // num이 있는 층 찾기
  const isFloor = updated.findIndex((item) => item.includes(num));

  // 열(index) 찾기 (화면 기준)
  const isIndex = updated[isFloor].indexOf(num);

  // 위층에 빈칸(0)이 있는지 확인
  let count = 0;
  for (let floor = isFloor; floor < updated.length; floor++) {
    if (updated[floor][isIndex] !== 0) {
      count++;
    }
  }

  return count;
}
