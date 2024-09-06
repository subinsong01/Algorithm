-- 코드를 입력하세요
select outs.ANIMAL_ID, outs.NAME
from ANIMAL_OUTS as outs
left outer join ANIMAL_INS as ins
on outs.ANIMAL_ID = ins.ANIMAL_ID
where ins.ANIMAL_ID is NULL
order by outs.ANIMAL_ID asc;