with rank1_cte(emp_id,first_name,salary,ranking)
as
(
SELECT empid, firstname ,salary, rank() OVER (ORDER by
 salary DESC ) Ranksalary FROM employee3
 )
 select emp_id,first_name,salary,ranking from rank1_cte


 with rank2_cte(first_name,salary,ranking)
As(
 select * 
 from(select firstname, salary, dense_rank() 
 over(order by salary desc)salaryrank from employee3) temp where salaryrank =4
 )
 select first_name,salary,ranking from rank2_cte



 with rank3_cte(departmentName,totalSalary) as (
 SELECT department, sum(salary) from employee3 GROUP by department
 ) select departmentname,totalsalary  from rank3_cte
 
 
 with rank4_cte(departmentName,totalSalary) as (
 SELECT department, sum(salary) from employee3 GROUP by department
 ) select departmentName,totalSalary  from rank4_cte
 ORDER by totalsalary desc


 with rank5_cte(departmentname,max_salary) as (
 SELECT department, max(salary) as maxsalary from employee3
 GROUP by department ) select departmentname,max_salary from rank5_cte ORDER by max_salary ASC


 with rank6_cte(departmentname,min_salary) as (
 SELECT department, min(salary) as minsalary from employee3
 GROUP by department )
 select departmentname,min_salary from rank6_cte  ORDER by min_salary ASC

 with rank7_cte(departmentname,gt50k) as (
SELECT department, sum(salary) as  totalsalary
from employee3 GROUP by department HAVING sum(salary) > 50000
) select*  from rank7_cte
ORDER by  gt50k DESC