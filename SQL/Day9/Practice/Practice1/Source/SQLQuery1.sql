create table #information
(
id int,
 firstName varchar(100), 
 lastName varchar(100), 
 age int,
dateOfBirth date, 
skill varchar(100)
)

DECLARE @json NVARCHAR(MAX);
SET @json = N'[  
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith", "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00"}  
]';
insert into #information 
SELECT  id, firstName, lastName, age, dateOfBirth, skills
FROM OPENJSON(@json)  
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',  
    age INT,
    dateOfBirth DATETIME2 '$.dob',
    skills NVARCHAR(MAX) '$.info.skills' AS JSON
  )
  select * from #information

  CREATE TABLE #PESON
 ( id INT ,
    firstName NVARCHAR(50) ,
    lastName NVARCHAR(50) ,  
    age INT,
    dateOfBirth DATETIME2,
 )
 INSERT INTO #PESON
 SELECT ID,firstName,lastName,AGE,dateOfBirth FROM #information
 SELECT * FROM #PESON

 CREATE TABLE #SKILLS 
 ( id INT, skills NVARCHAR(MAX))

 INSERT INTO #SKILLS
 SELECT ID , skiLL FROM #information          

 SELECT* FROM #SKILLS

 create table #hyy
 (valuess varchar(50))
  insert into #hyy select value  FROM string_split('["SQL", "C#", "Azure"]', ',')

   
  select * from #hyy

 
  update #hyy
  set valuess = trim('[] "' from valuess) from #hyy 


 IF DATENAME(weekday, GETDATE()) IN (N'Saturday', N'Sunday')
       SELECT 'Weekend';
ELSE 
       SELECT 'Weekday';
  
  SELECT   ProductNumber, Category =  
      CASE ProductLine  
         WHEN 'R' THEN 'Road'  
         WHEN 'M' THEN 'Mountain'  
         WHEN 'T' THEN 'Touring'  
         WHEN 'S' THEN 'Other sale items'  
         ELSE 'Not for sale'  
      END,  
   Name  
FROM Production.Product  
ORDER BY ProductNumber;  


SELECT   ProductNumber, Name, "Price Range" =   
      CASE   
         WHEN ListPrice =  0 THEN 'Mfg item - not for resale'  
         WHEN ListPrice < 50 THEN 'Under $50'  
         WHEN ListPrice >= 50 and ListPrice < 250 THEN 'Under $250'  
         WHEN ListPrice >= 250 and ListPrice < 1000 THEN 'Under $1000'  
         ELSE 'Over $1000'  
      END  
FROM Production.Product  
ORDER BY ProductNumber ;  

--select ProductNumber,Name,ListPrice from Production.Product

WHILE (SELECT AVG(ListPrice) FROM Production.Product) < $300  
BEGIN  
   UPDATE Production.Product  
      SET ListPrice = ListPrice * 2  
   SELECT MAX(ListPrice) FROM Production.Product  
   IF (SELECT MAX(ListPrice) FROM Production.Product) > $500  
      BREAK  
   ELSE  
      CONTINUE  
END  
PRINT 'Too much for the market to bear';  

DECLARE @json NVARCHAR(MAX);
SET @json = N'[
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith" , "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00"}
]';

select * from OPENJSON(@json)
with(
id INT '$.id',
firstname nvarchar(50) '$.info.name',
lastname varchar(50) '$.info.surname',
age int,
dateofbirth DATETIME2 '$.dob'
);

DECLARE @json NVARCHAR(MAX);
SET @json = N'[  
  {"id": 2, "info": {"name": "John", "surname": "Smith"}, "age": 25},
  {"id": 5, "info": {"name": "Jane", "surname": "Smith", "skills": ["SQL", "C#", "Azure"]}, "dob": "2005-11-04T12:00:00"}  
]';

SELECT id, firstName, lastName, age, dateOfBirth, skill  
FROM OPENJSON(@json)  
  WITH (
    id INT 'strict $.id',
    firstName NVARCHAR(50) '$.info.name',
    lastName NVARCHAR(50) '$.info.surname',  
    age INT,
    dateOfBirth DATETIME2 '$.dob',
    skills NVARCHAR(MAX) '$.info.skills' AS JSON
  )
OUTER APPLY OPENJSON(skills)
  WITH (skill NVARCHAR(8) '$');


  DECLARE @jsonInfo NVARCHAR(MAX)

SET @jsonInfo=N'{  
     "info":{    
       "type":1,  
       "address":{    
         "town":"Bristol",  
         "county":"Avon",  
         "country":"England"  
       },  
       "tags":["Sport", "Water polo"]  
    },  
    "type":"Basic"  
 }'  


 SELECT
 JSON_VALUE(@jsonInfo,'$.type') AS Town

 SELECT JSON_QUERY(@jsonInfo,'$.info.address') As Address

 select * from HumanResources.Employee for json auto