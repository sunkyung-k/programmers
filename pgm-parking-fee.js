// https://school.programmers.co.kr/learn/courses/30/lessons/92341
// 프로그래머스 코딩테스트 - 주차 요금 계산 javascript

function solution(fees, records) {
  // 배열 안 문자열을 객체로 나누기
  let arr = records.map((item) => item.split(" "));

  // 시간 ":" 제외
  const updateArr = arr.map(([time, car, status]) => {
    const timeArr = time.split(":").map(Number);
    const timeH = timeArr[0];
    const timeM = timeArr[1];
    return [timeH, timeM, car, status]; // 시 + 분 + 차량번호 + 상태
  });

  const sort = updateArr.sort((a, b) => a[2] - b[2]); // 차 번호별 sort
  const getTime = (timeH, timeM) => timeH * 60 + timeM; // 시간을 분으로 계산

  // 차량별로 묶은 객체
  const carNumberObj = {};
  for (let i = 0; i < sort.length; i++) {
    const [timeH, timeM, car, status] = sort[i];

    // 처음 보는 차량이면 빈 배열로 초기화
    if (!carNumberObj[car]) carNumberObj[car] = [];

    // 시 + 분 + 상태
    carNumberObj[car].push([Number(timeH), Number(timeM), status]);
  }

  // 차량별 총 주차 시간 계산
  const carTimes = {};
  for (let car in carNumberObj) {
    const logs = carNumberObj[car];
    let total = 0; // 총 시간

    // 2개씩 in,out 묶음
    for (let i = 0; i < logs.length; i += 2) {
      // in, out 시간
      const [inH, inM] = logs[i];
      const outTimeValue = logs[i + 1];
      const [outH, outM] = outTimeValue ? [outTimeValue[0], outTimeValue[1]] : [23, 59];

      // 시간 분으로 계산
      const inTime = inH * 60 + inM;
      const outTime = outH * 60 + outM;
      const betweenTime = outTime - inTime;

      total += betweenTime;
    }

    // 차량별 총 주차 시간 저장
    carTimes[car] = total;
  }

  // 요금 계산
  const [baseTime, baseFee, overTime, overFee] = fees;
  return Object.keys(carTimes)
    .sort()
    .map((car) => {
      const time = carTimes[car];
      if (time <= baseTime) return baseFee; // 기본 시간 이하면 기본 요금
      const extra = time - baseTime;
      const units = Math.ceil(extra / overTime);
      return baseFee + units * overFee;
    });
}
