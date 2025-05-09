# Activity Booking API – Backend Project

This project is a RESTful backend for a basic Activity Booking App, built as part of the Backend Development.

# Features

- User Registration and Login with JWT Authentication
- Public endpoint to view available activities
- Authenticated users can book activities
- Users can view their own bookings
- MongoDB for data storage via Mongoose
- Secure password hashing using bcrypt
- Input validation with express-validator
- Modular codebase with clean folder structure

# Tech Stack

- Runtime: Node.js
- Framework: Express.js
- Database: MongoDB (Mongoose)
- Authentication: JWT
- Password Hashing:bcrypt
- Validation:express-validator
- Testing: Postman

# Project Structure

activity-booking-app/
│
├── controllers/
│ ├── authController.js
│ ├── activityController.js
│ └── bookingController.js
│
├── models/
│ ├── User.js
│ ├── Activity.js
│ └── Booking.js
│
├── routes/
│ ├── authRoutes.js
│ ├── activityRoutes.js
│ └── bookingRoutes.js
│
├── middlewares/
│ └── authMiddleware.js
│
├── config/
│ └── db.js
│
├── .env
├── app.js
├── package.json
└── README.md

# Install dependencies

npm init -y
npm install express mongoose bcryptjs jsonwebtoken dotenv cors express-validator
npm install --save-dev nodemon

# Create a .env file in the root directory

PORT=YOUR_PORT
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key

# Start the server

npm run dev
