CREATE PROCEDURE HUMANRESOURCES.USPGETEMPLOYEESTEST2
	@LASTNAME NVARCHAR(50),
	@FIRSTNAME NVARCHAR(50)
	AS

	SET NOCOUNT ON;
	SELECT FirstName,LastName,Department FROM HumanResources.vEmployeeDepartmentHistory
	WHERE FirstName = @FIRSTNAME AND LastName = @LASTNAME

	AND EndDate IS NULL;

	select * from HumanResources.vEmployeeDepartmentHistory

	EXECUTE HumanResources.USPGETEMPLOYEESTEST2 N'Poe',N'Deborah';