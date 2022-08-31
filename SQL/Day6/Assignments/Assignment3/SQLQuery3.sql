CREATE VIEW London as
select FIRST_NAME,LAST_NAME,JOB_ID,e.DEPARTMENT_ID,d.DEPARTMENT_NAME  from employee1 e
join departments d on d.DEPARTMENT_ID = e.DEPARTMENT_ID
join locations l on d.LOCATION_ID = l.LOCATION_ID
where l.CITY = 'london'

create view london2 as
SELECT FIRST_NAME, LAST_NAME, JOB_ID, DEPARTMENT_ID FROM employee1
WHERE DEPARTMENT_ID = (SELECT DEPARTMENT_ID FROM departments
WHERE LOCATION_ID = (SELECT LOCATION_ID FROM locations
WHERE CITY = 'London'))

create view departmentname as 
select department_name,count(*) as number   from employee1 e
join departments d on d.department_id = e.department_id
group by department_name

select * from departmentname

select jh.employee_id,j.job_title,DATEDIFF(YEAR,start_date,end_date) as diffrence from job_history jh
inner join jobs j on jh.job_id = j.job_id
where jh.department_id = 90 