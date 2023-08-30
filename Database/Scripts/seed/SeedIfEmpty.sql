IF NOT EXISTS (SELECT 1 FROM [dbo].[Playground])
BEGIN
    INSERT INTO [dbo].[Playground] ([FirstName], [MiddleName], [LastName], [ExamDate], [Price])
    VALUES
        ('John', 'James', 'Man', '1992-09-12', 8.99),
        ('Theo', 'Van', 'Smith', '1992-08-14', 5.99),
        ('Greg', 'Milton', 'Joon', '1992-11-01', 19.99)
END