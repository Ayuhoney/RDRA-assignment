# rudra-innovative
Express.js User Authentication and CRUD API
This Express.js application provides a user authentication and CRUD (Create, Read, Update, Delete) API with user registration, login, password reset, and user management features. It uses JSON Web Tokens (JWT) for authentication and MongoDB for data storage.

Table of Contents
Getting Started
Prerequisites
Installation
Configuration
Usage
User Registration
User Login
Forgot Password
Get All Users
Get User by ID
Create User
Update User
Delete User
Contributing
License
Getting Started
Prerequisites
Before running the application, make sure you have the following installed:

Node.js
npm (Node Package Manager)
MongoDB
Installation
Clone this repository:

bash
Copy code
git clone https://github.com/your-username/express-auth-crud-api.git
Change to the project directory:

bash
Copy code
cd express-auth-crud-api
Install the required npm packages:

bash
Copy code
npm install
Configuration
Configure the MongoDB connection in config.js:

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
Include the JWT token in the request header (Authorization: Bearer My_TOKEN) to authenticate the request.

Get User by ID
To get a user by ID, send a GET request to:

bash
Copy code
http://localhost:3000/users/:id
Include the JWT token in the request header (Authorization: Bearer YOUR_TOKEN) to authenticate the request.

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
Include the JWT token in the request header (Authorization: Bearer My_TOKEN) to authenticate the request.

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
Include the JWT token in the request header (Authorization: Bearer My_TOKEN) to authenticate the request.

Delete User
To delete a user, send a DELETE request to:

bash
Copy code
http://localhost:3000/users/:id
Include the JWT token in the request header (Authorization: Bearer My_TOKEN) to authenticate the request.

Contributing
Contributions are welcome! Please follow the Contributing Guidelines.

Feel free to code review the README further based on my project's specific details. Be sure to replace placeholders like your-username, your-password, your-secret-key, and http://localhost:3000 with the actual values and URLs relevant to your project# Rudra-Innovative-Projects
