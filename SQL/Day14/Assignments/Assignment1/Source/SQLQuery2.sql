ALTER TRIGGER INSERTION1
ON CourseEnrolled
FOR INSERT
AS
	BEGIN 
		DECLARE @StudentID INT, @CourseID INT ,@CourseFee INT

		SELECT @StudentID =StudentID , @CourseID=CourseID FROM inserted

		SELECT @CourseFee = TotalFees FROM Course
		WHERE CourseID = @CourseID

		UPDATE Student
		SET TotalFees += @CourseFee,
		RemainingAmt += @CourseFee
		WHERE StudentID = @StudentID
	END

INSERT INTO CourseEnrolled(StudentID,CourseID)
VALUES (7,101)


ALTER TRIGGER INSERTION2
ON FeePayment
FOR  INSERT
AS BEGIN
	DECLARE @STUDENTID INT,@AMOUNTPAID INT
	SELECT @STUDENTID = StudentID,@AMOUNTPAID = AmountPaid FROM inserted
	UPDATE Student
    SET RemainingAmt -= @AMOUNTPAID
    WHERE StudentID = @STUDENTID
	END

	INSERT INTO FeePayment
	VALUES (7,5000,2022-07-01);