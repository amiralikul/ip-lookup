Frontend Home Assignment
Objective
Create a React application in TypeScript to test the candidate's ability to:

Structure and separate components effectively.
Work with backend APIs.
Implement navigation and state preservation subtly.
Duration
The assignment is designed to take 2 hours.
Assignment Details
You are tasked with building a simple application that interacts with a backend API. The application should allow users to search for specific users, display the matching results, and provide a way to view detailed information about individual users.
Requirements
Main Page

Display a table containing all users retrieved from the provided backend API.
Include a search bar at the top of the page to filter the displayed users based on a search query.
The trigger of the search can be either a button or pressing the keyboard.

User Details View

Allow users to click on a user from the table to navigate to a detailed view page.
The detailed view should show comprehensive information about the selected user fetched from the API.
Provide a way to navigate back to the previous page.

Component Design

Use functional components and organize them in a way that demonstrates modularity and reusability.
Include at least these components:
SearchBar: Manages input and triggers the search.
UserTable: Displays the list of users.
UserDetail: Shows detailed information for a selected user.

Code Quality

Use TypeScript effectively, including types/interfaces for API responses and component props.
Follow best practices for code readability and maintainability.
Consider how well the application preserves the general state across components and pages.
Expected Results
By the end of the assignment, the candidate should provide:

A Functional Application

The application should allow:
Displaying all users in a table on the main page.
Filtering users using the search bar.
Viewing detailed information for a selected user.
Navigating back to the main page.

Clean and Modular Code

Components should be well-structured and reusable.
Types/interfaces should be defined and used effectively to ensure type safety.

Optional Enhancements

Bonus features such as a loading indicator, error handling for API failures, and basic unit tests for key components.
API Details
The backend API will provide endpoints like:

GET /users - Fetch a list of all users.

POST /users/search - Fetch a list of users matching the search query. The search text should be provided in the request body.

Example Request Body:

{
  "filter": { 
     "name": "John Doe"
  },
  "page": 0,
  "pageSize": 10
}

GET /users/:id - Fetch detailed information for a specific user.

Backend runs on localhost:3000

Setup
Clone the following git Repository and follow the instructions on the README.md file
https://github.com/weft-finance/Frontend-assignment-backend

Submission
Once completed, share the GitHub repository link with us. Ensure the repository is public or accessible.


Response /users 

```
{
    "users": [
        {
            "id": 1,
            "name": "User 1",
            "email": "user1@example.com",
            "age": 21
        },
        {
            "id": 2,
            "name": "User 2",
            "email": "user2@example.com",
            "age": 22
        },
        {
            "id": 3,
            "name": "User 3",
            "email": "user3@example.com",
            "age": 23
        },
        {
            "id": 4,
            "name": "User 4",
            "email": "user4@example.com",
            "age": 24
        },
        {
            "id": 5,
            "name": "User 5",
            "email": "user5@example.com",
            "age": 25
        },
        {
            "id": 6,
            "name": "User 6",
            "email": "user6@example.com",
            "age": 26
        },
        {
            "id": 7,
            "name": "User 7",
            "email": "user7@example.com",
            "age": 27
        },
        {
            "id": 8,
            "name": "User 8",
            "email": "user8@example.com",
            "age": 28
        },
        {
            "id": 9,
            "name": "User 9",
            "email": "user9@example.com",
            "age": 29
        },
        {
            "id": 10,
            "name": "User 10",
            "email": "user10@example.com",
            "age": 20
        }
    ],
    "totalPages": 5
}```