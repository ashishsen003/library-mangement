# Book Management System with GraphQL API

This project is a Node.js application with a GraphQL API that manages books and users. It includes authentication functionality using JSON Web Tokens (JWT) and features for adding, browsing.
### Deployed Link https://library-mangement-95lb.onrender.com

### Presentation Video https://drive.google.com/file/d/1oezDgLGb4lT6h71aPCe60vSLCjmfVZKV/view?usp=drive_link

## Features

- User authentication (registration, login)

## Technologies Used

- Node.js
- Express.js
- GraphQL
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT)
- bcrypt (for password hashing)
- Other npm packages (check package.json for details)

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
### Install dependencies:
npm install

### Set up environment variables:
Create a .env file in the project root and define the following variables:
PORT=4000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>

### Start the server:
npm start

### Usage
Access the GraphQL Playground at http://localhost:4000/graphql to interact with the API.
Register a new user using the register mutation.
Log in with the registered user using the login mutation to obtain a JWT token.
Explore and execute queries and mutations to manage users and books.

### API Documentation
For detailed information on the available queries and mutations, refer to the GraphQL schema documentation in the GraphQL Playground.
