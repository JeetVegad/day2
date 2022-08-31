create view display as
select distinct department_name, e.first_name,e.last_name from employee1 e
join employee1 m on e.employee_id = m.manager_id
join departments d on d.department_id = e.department_id 

create view exprerience as 
select distinct department_name,e.first_name + ' '+e.last_name as name,e.hire_date,e.salary from employee1 e
join employee1 m on e.employee_id = m.manager_id
join departments d on d.department_id = e.department_id
join jobs jh on e.job_id = jh.job_id
where DATEDIFF(YEAR,e.hire_date,GETDATE()) > 15
