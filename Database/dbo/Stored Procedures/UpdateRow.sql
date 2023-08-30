CREATE PROCEDURE [dbo].[UpdateRow]
    @Id INT,
    @FirstName VARCHAR(50),
    @MiddleName VARCHAR(50) = NULL,
    @LastName VARCHAR(50),
    @ExamDate DATE,
    @Price DECIMAL(18, 2)
AS
BEGIN
    UPDATE dbo.Playground
    SET FirstName = @FirstName,
        MiddleName = @MiddleName,
        LastName = @LastName,
        ExamDate = @ExamDate,
        Price = @Price
        --MiddleName = CASE WHEN @MiddleName IS NULL THEN MiddleName ELSE @MiddleName END
    WHERE Id = @Id
END