CREATE TABLE [dbo].[Playground]
(
	[Id] INT IDENTITY(1,1) NOT NULL PRIMARY KEY, 
    [FirstName] VARCHAR(50) NOT NULL, 
    [MiddleName] VARCHAR(50) NULL, 
    [LastName] VARCHAR(50) NOT NULL, 
    [ExamDate] DATE NOT NULL, 
    [Price] DECIMAL(18, 2) NOT NULL
)
