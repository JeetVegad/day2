
SELECT empid, firstname ,salary, rank() OVER (ORDER by
 salary DESC ) Ranksalary FROM employee3

 create index nonsalary1
 on employee3(salary)

 
 select * 
 from(select firstname, salary, dense_rank() 
 over(order by salary desc)salaryrank from employee3) temp where salaryrank =4;

 
  create index nondepartment
 on employee3(department)

 SELECT department, sum(salary) from employee3 GROUP by department
 


 
SELECT department, sum(salary) as totalsalary from employee3
 GROUP by department ORDER by totalsalary DESC

 SELECT department, max(salary) as maxsalary from employee3
 GROUP by department ORDER by maxsalary ASC

 SELECT department, min(salary) as minsalary from employee3
 GROUP by department ORDER by minsalary ASC

 
SELECT department, sum(salary) as  totalsalary
from employee3 GROUP by department HAVING sum(salary) > 50000
ORDER by  totalsalary DESC