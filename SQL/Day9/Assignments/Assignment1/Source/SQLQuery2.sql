CREATE TABLE EMPLOYEE_BATCH
(
Banking varchar(50),
Insuarance varchar(50),
Servicess varchar(50) 
)

select Banking as 'Bank_Dept' from EMPLOYEE_BATCH
select Insuarance as 'Insurance_Dept' from EMPLOYEE_BATCH
select Servicess as 'Service_Dept' from EMPLOYEE_BATCH
GO
declare @StudentData nvarchar(max)
set @StudentData = N'[
{"Std_name":"Jeet","Std_Address":"Bhavnagar","Std_city":"Bhavnagar","Std_Dob":"2001-02-31","Std_Standard":"12th"},
{"Std_name":"Akash","Std_Address":"Ahmedabad","Std_city":"Kalol","Std_Dob":"2000-02-31","Std_Standard":"12th"},
{"Std_name":"Himanshu","Std_Address":"Amreli","Std_city":"Bhavnagarr","Std_Dob":"1999-02-31","Std_Standard":"12th"},
{"Std_name":"Nidhi","Std_Address":"Jamnagar","Std_city":"Bhavnagr","Std_Dob":"1998-02-31","Std_Standard":"12th"},
{"Std_name":"Rahul","Std_Address":"Surat","Std_city":"Ahmedabad","Std_Dob":"2001-02-31","Std_Standard":"12th"}
]';

SELECT std_name,std_Address,std_city,std_dob,std_standard from OPENJSON(@StudentData)
with (
std_name varchar(50) '$.Std_name',
std_address varchar(50) '$.Std_Address',
std_city varchar(50) '$.Std_city',
std_dob varchar(50) '$.Std_Dob',
std_standard varchar(50) '$.Std_Standard'
);