CREATE TABLE employee5 (
	"empid"	INTEGER NOT NULL identity(1,1),
	"firstname"	TEXT NOT NULL,
	"lastname"	TEXT NOT NULL,
	"salary"	NUMERIC NOT NULL,
	"joindate"	date NOT NULL,
	"department"	TEXT NOT NULL,
	"managerid"	INTEGER,
	PRIMARY KEY("empid"),
)
ALTER TABLE incentive
DROP CONSTRAINT fk_incentive;
INSERT INTO employee5(firstname,lastname,salary,joindate,department,managerid) values

( 'Jeet', 'Vegad', '5000', '2022-05-12', 'mobile', '1'),
('pavan', 'kumar', '8000', '2020-01-01', 'mobile', '1'),
( 'mahesh', 'Rao', '18000', '2016-02-11', 'php', '4'),
 ('neha', 'sharama', '10000', '2006-02-11', 'php', '4'),
( 'bhuvneshavar', 'kumar', '15000', '2018-12-21', 'node', '')

CREATE TABLE "incentive" (
	"empid"	INTEGER,
	"incdate"	date NOT NULL,
	"incamount"	NUMERIC NOT NULL,
	FOREIGN KEY("empid") REFERENCES "employee5"("empid")
);
alter table incentive add constraint fk_incentive foreign key (empid) references employee5 (empid)
INSERT INTO incentive (empid,incdate,incamount) values
('1', '2022-07-12', '2000'),
('3', '2017-02-01', '5000'),
('1', '2022-08-12', '4000')
INSERT INTO incentive (empid,incdate,incamount) values('11', '2022-08-12', '4000')
INSERT INTO incentive (empid,incdate,incamount) values ('12', '2022-08-12', '4000')


INSERT INTO employee5 
(firstname,lastname,salary,joindate,department)
VALUES ( 'Jeet' , 'Vegad', 5000, ('2022-05-12') , 'mobile'),
('pavan','kumar',8000,('2020-01-01') ,'mobile'),
('mahesh','Rao',18000,('2016-02-11') ,'php'),
('neha','sharama',10000,('2006-02-11') ,'php'),
('bhuvneshavar','kumar',15000,('2018-12-21') ,'node');

select*from employee5

SELECT firstname, incdate , joindate from employee5 A
INNER JOIN incentive B on A.empid = B.empid

SELECT firstname, incamount from employee5 A
INNER JOIN incentive B on A.empid = B.empid 
AND incamount > 3000;

SELECT firstname, incamount from employee5 A
LEft  JOIN incentive B  on
A.empid = B.empid


SELECT e.firstname as empname , 
m.firstname as manager
from employee5 e LEFT OUTER JOIN employee5 m on m.empid = e.managerid

SELECT firstname,  isnull(incamount,0) from employee5 A
LEft  JOIN incentive B  on
A.empid = B.empid