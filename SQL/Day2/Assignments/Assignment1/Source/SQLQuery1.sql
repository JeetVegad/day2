update Employee set Email ='Not Available'


update Employee set Email ='Not Available',CommissionPct = 0.10


update Employee set Email ='Not Available',CommissionPct = 0.10 where DepartmentID = 110

update Employee set Email ='Not Available',CommissionPct = 0.10 where DepartmentID = 80 AND CommissionPct <= 0.20


select * from Employee

CREATE TABLE "departments" (
	"department_id"	INTEGER NOT NULL,
	"departmentname"	TEXT NOT NULL,
	PRIMARY KEY("department_id")
);
Alter table departments
alter column departmentname varchar(50);
INSERT INTO departments ("department_id", "departmentname") VALUES ('10', 'admin');
INSERT INTO departments ("department_id", "departmentname") VALUES ('20', 'marketing');
INSERT INTO departments ("department_id", "departmentname") VALUES ('40', 'sales');
INSERT INTO departments ("department_id", "departmentname") VALUES ('80', 'mobile');
INSERT INTO departments ("department_id", "departmentname") VALUES ('90', 'hr');
INSERT INTO departments ("department_id", "departmentname") VALUES ('100', 'Accouning');
INSERT INTO departments ("department_id", "departmentname") VALUES ('110', 'qa');


Select * from departments

update Employee set Email ='Not Available' where DepartmentID  = (Select department_id from departments where departmentname = 'Accouning');


update Employee set Salary = 8000 where EmployeeID=105 And Salary <5000;


update Employee SET JobId = 'SH_CLERK' where EmployeeID = 118 and DepartmentID=30 and JobId not like 'SH%';


update Employee set Salary = case DepartmentID
	when 40 then Salary + (Salary*0.25)
	when 90 then Salary + (Salary*0.15)
	when 110 then Salary + (Salary*0.10)
	else Salary
	end
	where DepartmentID in (40,90,110);


	
	update Employee  set Salary = Salary + (Salary * 0.20),
			CommissionPct = CommissionPct + (CommissionPct * 0.10) where JobId = 'PU_CLERK';

select * from Employee

select FirstName,LastName from Employee

select FirstName as "Employee Name" from Employee


select * from Employee where FirstName='steven'

select * from Employee where FirstName='steven' or FirstName = 'lex'



select * from Employee where not FirstName='Neena'

select * from Employee where Salary Between 5000 and 8000

SELECT FirstName+' '+ LastName  AS Fullname  , Salary  , (Salary  + (Salary  *0.12 )) AS PF From Employee

select * from Employee  where FirstName like 'N%'

select distinct DepartmentID from Employee

select * from Employee order by FirstName   Desc

select EmployeeID,FirstName+' '+LastName as Names,Salary from Employee order by Salary Asc

