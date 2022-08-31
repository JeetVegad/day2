-- Verify that the stored procedure does not already exist.  
IF OBJECT_ID ( 'usp_GetErrorInfo', 'P' ) IS NOT NULL   
    DROP PROCEDURE usp_GetErrorInfo;  
GO  
  
-- Create procedure to retrieve error information.  
CREATE PROCEDURE usp_GetErrorInfo  
AS  
SELECT  
    ERROR_NUMBER() AS ErrorNumber  
    ,ERROR_SEVERITY() AS ErrorSeverity  
    ,ERROR_STATE() AS ErrorState  
    ,ERROR_PROCEDURE() AS ErrorProcedure  
    ,ERROR_LINE() AS ErrorLine  
    ,ERROR_MESSAGE() AS ErrorMessage;  
GO  
  
BEGIN TRY  
    -- Generate divide-by-zero error.  
    SELECT 1/0;  
END TRY  
BEGIN CATCH  
    -- Execute error retrieval routine.  
    EXECUTE usp_GetErrorInfo;  
END CATCH;


CREATE TABLE TESTTHROW(ID INT PRIMARY KEY)

BEGIN TRY 
	INSERT TESTTHROW(ID) VALUES(1);


	INSERT TESTTHROW(ID) VALUES(1);
END TRY

BEGIN CATCH 
	DECLARE @ERROR_MESSAGE VARCHAR(30);
	SET @ERROR_MESSAGE = 'ID IS PRIMARY KEY DUPLICATE';
	THROW 123000,@ERROR_MESSAGE,1;
END CATCH

BEGIN TRY
	RAISERROR('Eroorraised in TRY block',
				16,
				1);
END TRY
BEGIN CATCH 
		DECLARE @ERRORMESSAGE NVARCHAR(4000);
		DECLARE @ERRORSEVERITY INT;
		DECLARE @ERRRORSTATE INT;


		SELECT 
			@ERRORMESSAGE = ERROR_MESSAGE(),
			@ERRORSEVERITY = ERROR_SEVERITY(), 
			@ERRRORSTATE = ERROR_STATE();


			RAISERROR(@ERRORMESSAGE,
			@ERRORSEVERITY,
			@ERRRORSTATE
			);
END CATCH