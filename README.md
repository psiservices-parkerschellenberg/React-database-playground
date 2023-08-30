# React-database-playground

React app with a C# API set up for CRUD operations.

Leaving `main` branch as the app with a working C# API and a boilerplate react app. Make a branch off of `main` to use as a playground for testing/learning new react libraries.

If any changes to the boilerplate (`main`) should be made, you can commit them to `main` otherwise create a branch and mess around there.

The database contains a single table with columns..

- FirstName
- MiddleName (nullable)
- LastName
- ExamDate
- Price

Web - Visual Studio project template: ASP.NET Core with React.js (Web)

Database - Visual Studio project template: SQL Server Database Project

Insight.Database used as micro-ORM

How to use:

1. Clone this repo
2. Make a branch to work on
3. Use the publish.xml file to publish the database to your LocalDB
4. `cd` into ClientApp and `npm install`
5. Run the solution from Visual Studio - the webpage should open in your browser
6. Built out the front-end, learning some new react libraries along the way!
