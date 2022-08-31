CREATE TABLE "employee2" (
	"empis"	INTEGER NOT NULL IDENTITY(1,1),
	"firstname"	TEXT NOT NULL,
	"lastname"	TEXT NOT NULL,
	"salary"	NUMERIC NOT NULL,
	"hiredate"	date NOT NULL,
	"phone"	INTEGER NOT NULL,
	"dob"	date NOT NULL,
	PRIMARY KEY("empis")
);

INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'Jeet', 'vegad', '5000', '2022-06-17', '878856565', '2001-06-17');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'lex', 'musk', '6000', '2021-06-21', '65656565', '2001-03-17');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'sk', 'singh', '6000', '2017-04-30', '5656565', '1987-06-07');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'mayank', 'op', '10000', '2017-05-07', '5484878', '1997-03-10');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'kash', 'soul', '15000', '2017-07-07', '788445', '1994-03-14');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'Jeet', 'singh', '6000', '2017-04-30', '5656565', '1987-06-07');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'Jeet2', 'singh', '6000', '1987-06-07', '5656565', '1987-06-07');
INSERT INTO employee2 ( "firstname", "lastname", "salary", "hiredate", "phone", "dob") VALUES ( 'Jeet2', 'singh', '6000', '1987-06-07', '1231231231', '1987-06-07');




select * from employee2 

select firstname as employeeName , len('firstname') as lengthofname from employee2
WHERE firstname like  'a%' or firstname  like 'j%' 
or firstname  like 'm%' 

SELECT firstname,salary=LEFT( '$' +CAST( Salary as varchar )+'.0000',10) FROM 
+


SELECT FirstName, REPLICATE('$', 10 - LEN(Salary)) + CAST(Salary AS varchar)as SALARY 
from employee2

SELECT empis,FirstName,LastName,HireDate
FROM employee2
WHERE DATEPART(mm,HireDate)=07 OR DATEPART(dd,HireDate)=07

select len('firstname') , lastname from employee2 WHERE lastname like '__c%'

SELECT right(phone,4) as 'Ph.No.' FROM employee2;

SELECT REPLACE(PHONE,'123','999') AS PHONE FROM employee2


SELECT YEAR(GETDATE())-YEAR(DOB) AS AGE FROM employee2

SELECT * FROM employee2 WHERE DATENAME(WEEKDAY,HireDate) = 'Monday'

select * from employee2 where hiredate BETWEEN '1987-06-01' and '1987-07-01'

SELECT RIGHT(CONVERT(VARCHAR, GETDATE(),100),7) + ' ' +CONVERT(VARCHAR,GETDATE(),107)

SELECT FirstName,LastName FROM employee2
WHERE MONTH(HireDate) = '6'

SELECT FirstName,LastName,DATEDIFF(YYYY,hiredate,GETDATE()) AS EXPERIENCE FROM employee2

SELECT FirstName FROM employee2
WHERE DATENAME(YEAR,HireDate)=1987

select * from employee2