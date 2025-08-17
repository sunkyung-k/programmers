// https://school.programmers.co.kr/learn/courses/30/lessons/42746?language=javascript
// 프로그래머스 코딩테스트 - 가장 큰 수 javascript
function solution(numbers) {
  // 숫자 조합
  const result = numbers
    .sort((a, b) => {
      const strA = String(a) + String(b);
      const strB = String(b) + String(a);
      return strB - strA;
    })
    .join("");

  // 배열에 0만 있는 경우
  if (result.split("")[0] === "0") {
    return "0";
  }

  return result;
}
