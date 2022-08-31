CREATE TABLE ACCOUNT (
		AccountNumber int PRIMARY KEY,
		AccountHolderName int,
		AccountType int FOREIGN KEY REFERENCES AccountType(AccountTypeID),
		Balance int
)
ALTER TABLE ACCOUNT 
ALTER COLUMN AccountHolderName varchar(50)


	INSERT INTO ACCOUNT VALUES(123456789,'JEET VEGAD',1,123000),(123456780,'AKASH GUPTA',2,1230020),(123456781,'NIDHI GOKANI',1,1230300),(123456783,'HIMANSHU JOGANI',3,1230300)

ALTER TABLE AccountType 
ALTER COLUMN AccountTypeName varchar(50)
CREATE TABLE AccountType (
		AccountTypeID int,
		AccountTypeName int
		PRIMARY KEY(AccountTypeID)
		)

		INSERT INTO AccountType values (1,'savings'),(2,'current'),(3,'fixdeposit')

	CREATE TABLE Transections(
	TransectionID int,
	DebitAccount int FOREIGN KEY REFERENCES ACCOUNT(AccountNumber),
	CreditAccount int FOREIGN KEY REFERENCES ACCOUNT(AccountNumber),
	Amount int
	PRIMARY KEY(TransectionID)
	)


SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:        Jeet Vegad
-- Create date: 07-07-2022
-- Description:    Trigger to update account balance after new transaction
-- =============================================
CREATE TRIGGER trgNewTransaction
   ON  Transections 
   FOR INSERT
AS 
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    BEGIN TRY
    BEGIN TRANSACTION

        IF((SELECT Balance FROM Account WHERE AccountNumber = (SELECT DebitAccount from inserted))-(SELECT Amount FROM inserted)>500)
        BEGIN
            UPDATE Account SET Balance = Balance - (SELECT Amount FROM inserted)
            WHERE AccountNumber = (SELECT DebitAccount FROM inserted)

            UPDATE Account SET Balance = Balance + (SELECT Amount FROM inserted)
            WHERE AccountNumber = (SELECT CreditAccount FROM inserted)

            PRINT 'Accounts Updated. Transaction successful.'
            COMMIT TRANSACTION
        END

        ELSE
        BEGIN
            PRINT 'Sender Does not have Sufficient Balance. Transaction Cancelled.'
            ROLLBACK TRANSACTION
        END
    END TRY
    BEGIN CATCH
    ROLLBACK TRANSACTION
    PRINT 'TRANSACTION FAILED'
    END CATCH


END
GO

INSERT INTO Transections VALUES (12,123456789,123456780,10000)