--SELECT * from employees e  INNER JOIN Incentives i  on e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID

--SELECT * from employees WHERE salary > ( SELECT salary FROM employees WHERE FIRST_NAME = 'roy')

----CREATE VIEW EmployeeIncentive as 
----SELECT FIRST_NAME , LAST_NAME ,salary , JOINING_DATE , INCENTIVE_DATE ,INCENTIVE_AMOUNT FROM employees e LEFT JOIN
----incentives i on e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID

--select * from EmployeeIncentive



CREATE VIEW incentivegt3k as 
SELECT FIRST_NAME , LAST_NAME ,INCENTIVE_AMOUNT  from employees e INNER JOIN incentives i on
e.EMPLOYEE_ID = i.EMPLOYEE_REF_ID WHERE INCENTIVE_AMOUNT > 3000

--select * from incentivegt3k


