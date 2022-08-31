SELECT ProductID   
FROM Production.Product ;  

SELECT ProductID   
FROM Production.Product  
INTERSECT  
SELECT ProductID   
FROM Production.WorkOrder ;  

SELECT ProductID   
FROM Production.Product  
EXCEPT  
SELECT ProductID   
FROM Production.WorkOrder ; 

SELECT ProductID   
FROM Production.WorkOrder  
EXCEPT  
SELECT ProductID   
FROM Production.Product ;