CREATE TABLE employee3 (
empid INTEGER identity(1,1),
firstname TEXT NOT NULL,
lastname TEXT NOT NULL,
salary NUMERIC NOT NULL,
joindate date NOT NULL,
department TEXT NOT NULL,
PRIMARY KEY(empid)
)

alter table employee3 alter column department varchar(50) not null

INSERT INTO employee3 (	firstname,lastname,salary,joindate,department) values
	('Jeet', 'Vegad', '5000', '2021-05-01', '.net'),
	('pankaj', 'jamod', '7000', '2021-06-01', '.net'),
	('Roy', 'Thomas', '9000', '2020-07-01', 'mobile'),
	('John', 'Abraham', '10000', '2019-04-20', 'mobile'),
	( 'Jerry', 'Pinto', '650000', '2019-05-20', 'Insurance'),
	('Test', 'Name1', '70000', '2019-04-20', 'Accountant')

select*from employee3

SELECT empid, firstname ,salary, rank() OVER (ORDER by
 salary DESC ) Ranksalary FROM employee3

 select * 
 from(select firstname, salary, dense_rank() 
 over(order by salary desc)salaryrank from employee3) temp where salaryrank =4;


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