### Prerequisites

Before running the application, make sure you have the following installed:
- Node.js
- npm (Node Package Manager)
- MongoDB
- Express.js

project/
├── src/
│ ├── controllers/
│ │ ├── authController.js # Authentication-related controllers
│ │ └── userController.js # User management controllers
│ ├── models/
│ │ └── user.js # User model schema
│ ├── routes/
│ │ ├── authRoutes.js # Authentication-related routes
│ │ ├── userRoutes.js # User management routes
│ │ └── index.js # Main router file to combine all route files
│ ├── middleware/
│ │ └── authMiddleware.js # Authentication middleware
│ └── utils/
│ └── jwtUtils.js # JWT utility functions
├── app.js # Main Express application file
├── config/
│ └── config.js # Configuration settings
├── package.json # Project dependencies and scripts
├── package-lock.json # Dependency lock file
├── README.md # Project documentation
└── .gitignore # Git ignore file

### Installation

bash
Copy code
cd express-auth-crud-api
Install the required npm packages:

bash
Copy code
npm install
Configuration
Configure the MongoDB connection and other settings in the config.js file:

javascript
Copy code
module.exports = {
  mongoURI: 'mongodb://localhost:27017/mydb', // Replace with your MongoDB connection URL
  secretKey: 'your-secret-key' // Replace with a strong secret key
};
Adjust other configurations as needed in the config.js file.

Usage
User Registration
To register a new user, send a POST request to:

bash
Copy code
http://localhost:3000/users/register
Include the following JSON body:

json
Copy code
{
  "username": "your-username",
  "password": "your-password",
  "name": "Your Name",
  "age": "Your Age",
  "mobileNumber": "Your Mobile Number"
}
User Login
To log in, send a POST request to:

bash
Copy code
http://localhost:3000/users/login
Include the following JSON body:

json
Copy code
{
  "username": "your-username",
  "password": "your-password"
}
Forgot Password
To reset the password, send a POST request to:

bash
Copy code
http://localhost:3000/users/forgot-password
Include the following JSON body:

json
Copy code
{
  "username": "your-username",
  "password": "new-password"
}
Get All Users
To get a list of all users, send a GET request to:

bash
Copy code
http://localhost:3000/users
Include the JWT token in the request header (Authorization: Bearer My_token) to authenticate the request.

Get User by ID
To get a user by ID, send a GET request to:

bash
Copy code
http://localhost:3000/users/:id
Include the JWT token in the request header (Authorization: Bearer My_token) to authenticate the request.

Create User
To create a new user, send a POST request to:

bash
Copy code
http://localhost:3000/users
Include the following JSON body:

json
Copy code
{
  "username": "new-username",
  "password": "new-password",
  "name": "New User Name",
  "age": "New User Age",
  "mobileNumber": "New User Mobile Number"
}
Include the JWT token in the request header (Authorization: Bearer My_token) to authenticate the request.

Update User
To update a user, send a PUT request to:

bash
Copy code
http://localhost:3000/users/:id
Include the following JSON body with the updated user data:

json
Copy code
{
  "name": "Updated Name",
  "age": "Updated Age",
  "mobileNumber": "Updated Mobile Number"
}
Include the JWT token in the request header (Authorization: Bearer My_token) to authenticate the request.

Delete User
To delete a user, send a DELETE request to:

bash
Copy code
http://localhost:3000/users/:id
Include the JWT token in the request header (Authorization: Bearer My_token) to authenticate the request.


Feel free to code review the README further based on your project's specific details. Be sure to replace placeholders like your-username, your-password, your-secret-key, and http://localhost:3000 with the actual values and URLs relevant to my project.
