CREATE PROCEDURE [dbo].[DeleteRowById]
    @Id INT
AS
BEGIN
    DELETE FROM Playground
    WHERE Id = @Id
END