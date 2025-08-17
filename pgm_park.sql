/* https://school.programmers.co.kr/learn/courses/30/lessons/157340?language=mysql */
/* 프로그래머스 코딩테스트 - 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기 sql */
select car_id, 
  case
    when max('2022-10-16' between START_DATE and END_DATE) = 1 then '대여중' else '대여 가능'
  end as AVAILABILITY
from CAR_RENTAL_COMPANY_RENTAL_HISTORY
group by CAR_ID
order by CAR_ID desc
