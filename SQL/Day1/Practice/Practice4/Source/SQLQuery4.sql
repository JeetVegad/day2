CREATE TABLE EMPLOYEES(
	Employee_Id INT UNIQUE,
	FirstName VARCHAR(255),
	LastName VARCHAR(255),
	Email VARCHAR(255), 
	PhoneNumber NUMERIC, 
	Hire_Date DATE, 
	Job_Id INT CONSTRAINT FKJOBID FOREIGN KEY  REFERENCES JOBS (JobId),
	Salary MONEY,
	Commission MONEY, 
	Manager_Id INT, 
	Department_Id INT CONSTRAINT FKDEPARTMENTID FOREIGN KEY REFERENCES JobHistory (Department_Id)
)