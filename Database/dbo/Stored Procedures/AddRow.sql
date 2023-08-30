CREATE PROCEDURE [dbo].[AddRow]
    @FirstName VARCHAR(50),
    @MiddleName VARCHAR(50) = NULL,
    @LastName VARCHAR(50),
    @ExamDate DATE,
    @Price DECIMAL(18, 2)
AS
BEGIN
    INSERT INTO Playground(FirstName, MiddleName, LastName, ExamDate, Price)
    VALUES (@FirstName, @Middlename, @LastName, @ExamDate, @Price)
END
