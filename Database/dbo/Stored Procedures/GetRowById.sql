CREATE PROCEDURE [dbo].[GetRowById]
    @Id INT
AS
BEGIN
    SELECT *
    FROM dbo.Playground
    WHERE Id = @Id
END