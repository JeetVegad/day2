
----Q:1 Create a Store Procedure which will accept name of the customer as input parameter and product the following output, 
----List Names of Customers who are Depositors and have Same Branch City as that of input parameter customer’s Name

CREATE PROCEDURE CNAME_CITY @CNAME VARCHAR(18)
AS 
SELECT CNAME 
FROM CUSTOMER
WHERE CITY 
= (SELECT CITY FROM CUSTOMER WHERE CNAME = @CNAME)

EXEC CNAME_CITY @CNAME='NAREN'

---Q2: Create a Store Procedure which will accept name of the customer as input parameter and produce the following output List in JSON format,
---All the Depositors Having Depositors Having Deposit in All the Branches where input parameter customer is Having an Account 

ALTER PROCEDURE DEPOSITER_DETAIL @CNAME VARCHAR(18)
AS
SELECT * FROM DEPOSIT WHERE BNAME = (SELECT BNAME FROM BORROW WHERE CNAME= @CNAME)
FOR JSON PATH

EXEC DEPOSITER_DETAIL @CNAME = 'ANIL'
---Q3: Create a Store Procedure that will accept city name and returns the number of customers in that city. 
ALTER PROCEDURE CITY_COUNT @CITY VARCHAR(18)
AS
SELECT COUNT(CNAME)
FROM CUSTOMER
WHERE CITY = @CITY 

EXEC CITY_COUNT @CITY = 'MUMBAI'
---Q4: Create a Store Procedure which will accept city of the customer as input parameter and product the following output List in JSON format 
---List All the Customers Living in city provided in input parameter and Having the Branch City as MUMBAI or DELHI 
	CREATE PROCEDURE QUE4_CITY @CITY VARCHAR(18)
	AS
	SELECT DISTINCT C.CNAME,C.CITY,BR.CITY  FROM CUSTOMER C
	INNER JOIN DEPOSIT D
	ON C.CNAME = D.CNAME
	INNER JOIN BORROW B
	ON C.CNAME = B.CNAME
	INNER JOIN BRANCH BR
	ON B.BNAME = BR.BNAME
	WHERE C.CITY = @CITY AND BR.CITY IN ('MUMBAI' , 'DELHI')

	EXEC QUE4_CITY @CITY='MUMBAI'

---Q5: Count the Number of Customers Living in the City where Branch is Located
CREATE PROCEDURE BNAME_CUSTOMER @BNAME VARCHAR(18)
AS 
SELECT COUNT(CNAME) AS NOOFCUSTOMER FROM CUSTOMER C INNER JOIN BRANCH B ON B.CITY = C.CITY
WHERE BNAME = @BNAME

EXEC BNAME_CUSTOMER @BNAME = 'POWAI'

CREATE PROCEDURE CITY_CUST_COUNT @CITY VARCHAR(18)
AS 
SELECT COUNT(CNAME) AS NOOFCUSTOMER 
FROM CUSTOMER
WHERE CITY= @CITY

EXEC CITY_CUST_COUNT @CITY = 'DELHI'
---Q6: Create a Procedure which will accept input in JSON parameter CustomerName, City, ACTNO, Branch, amount And 
---insert these record in the Deposit table. Before inserting some validation should be done like amount should be greater than 10Rs. and date should always be current date.
CREATE PROCEDURE JSONPARA @JSON VARCHAR(MAX)
AS
	INSERT INTO DEPOSIT 
	SELECT * FROM OPENJSON(@JSON)WITH(ACTNO int,CNAME VARCHAR(18),BNAME VARCHAR(18),AMOUNT INT,ADATE DATE)
	WHERE AMOUNT>10 AND ADATE = CONVERT(date,GETDATE())
 
EXEC JSONPARA '{"ACTNO":162,"CNAME":"JEET","BNAME":"CHITRA","AMOUNT":6000,"ADATE":"2022-06-30"}'

SELECT * FROM DEPOSIT