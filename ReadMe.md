# E-commerce website

This project uses several npm packages to handle various functionalities such as setting up a server, managing a database, authentication, payment processing, file storage, and more. Below is a list of the npm packages installed and a brief explanation of their usage.

## Packages

### 1. **express**
   - **Version**: Installed using `npm i express`
   - **Purpose**: `express` is a fast, unopinionated, and minimalist web framework for Node.js. It is used to set up the server, manage routing, handle HTTP requests and responses, and build APIs.
   - **Common Use Case**: Creating a RESTful API, handling GET, POST, PUT, DELETE requests.
   - **Documentation**: [Express.js](https://expressjs.com/)

### 2. **mongoose**
   - **Version**: Installed using `npm i mongoose`
   - **Purpose**: `mongoose` is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model your application data and makes it easier to work with MongoDB.
   - **Common Use Case**: Defining models and schemas for collections in MongoDB, managing database connections, and performing CRUD operations on MongoDB.
   - **Documentation**: [Mongoose](https://mongoosejs.com/)

### 3. **jsonwebtoken**
   - **Version**: Installed using `npm i jsonwebtoken`
   - **Purpose**: `jsonwebtoken` is a module that allows you to create and verify JSON Web Tokens (JWT). JWTs are commonly used for secure authentication in web applications.
   - **Common Use Case**: Generating a token after a user logs in, verifying the token for protected routes in APIs, and managing session-less authentication.
   - **Documentation**: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

### 4. **stripe**
   - **Version**: Installed using `npm i stripe`
   - **Purpose**: `stripe` is a payment processing library that enables you to handle secure online payments and manage transactions via Stripe’s API.
   - **Common Use Case**: Integrating Stripe to handle one-time payments, subscriptions, managing customer billing, and payment validation.
   - **Documentation**: [Stripe Node.js](https://stripe.com/docs/api)

### 5. **cloudinary**
   - **Version**: Installed using `npm i cloudinary`
   - **Purpose**: `cloudinary` is a library for managing cloud-based image and video storage. It provides image upload, optimization, transformation, and delivery services.
   - **Common Use Case**: Uploading images or videos to Cloudinary, transforming images (e.g., resizing, cropping), and serving optimized assets.
   - **Documentation**: [Cloudinary](https://cloudinary.com/documentation/node_integration)

### 6. **cookie-parser**
   - **Version**: Installed using `npm i cookie-parser`
   - **Purpose**: `cookie-parser` is a middleware for parsing cookies attached to client requests. It simplifies working with cookies in your Express application.
   - **Common Use Case**: Reading, writing, and managing cookies for things like sessions, tracking user data, and handling user preferences.
   - **Documentation**: [cookie-parser](https://www.npmjs.com/package/cookie-parser)

### 7. **bcryptjs**
   - **Version**: Installed using `npm i bcryptjs`
   - **Purpose**: `bcryptjs` is a library to hash passwords and compare hashed passwords. It helps in securing user passwords in databases by hashing them before storing.
   - **Common Use Case**: Hashing user passwords before saving them to the database and verifying passwords during login by comparing the hashed password.
   - **Documentation**: [bcryptjs](https://www.npmjs.com/package/bcryptjs)

### 8. **ioredis**
   - **Version**: Installed using `npm i ioredis`
   - **Purpose**: `ioredis` is a Redis client for Node.js that provides a robust, high-performance interface for interacting with Redis databases.
   - **Common Use Case**: Managing caching mechanisms, session storage, real-time analytics, and data syncing by interacting with a Redis database.
   - **Documentation**: [ioredis](https://github.com/luin/ioredis)

## Installation

To install all the packages listed above, run the following command:

```bash
npm install express mongoose jsonwebtoken stripe cloudinary cookie-parser bcryptjs ioredis
