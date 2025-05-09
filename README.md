## Activity Booking API – Backend Project

This project is a RESTful backend for a basic Activity Booking App, built as part of the Backend Development.

## Features

- **User Registration and Login** with JWT Authentication
- **Public Endpoint** to view available activities
- **Authenticated Users** can book activities
- **Users Can View Their Own Bookings**
- **MongoDB** for data storage via Mongoose
- **Secure Password Hashing** using bcrypt
- **Input Validation** with express-validator
- **Modular Codebase** with clean folder structure

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: JWT
- **Password Hashing**: bcrypt
- **Validation**: express-validator
- **Testing**: Postman

## Project Structure

```
activity-booking-app/
├── controllers/
│   ├── authController.js
│   ├── activityController.js
│   └── bookingController.js
├── models/
│   ├── User.js
│   ├── Activity.js
│   └── Booking.js
├── routes/
│   ├── authRoutes.js
│   ├── activityRoutes.js
│   └── bookingRoutes.js
├── middlewares/
│   └── authMiddleware.js
├── config/
│   └── db.js
├── .env
├── app.js
├── package.json
└── README.md
```

## Installation

1. **Clone the repository**:
    ```bash
        git clone https://github.com/Chethans18/activity-booking-apis.git
        cd activity-booking-apis
        npm install
    ```
2. **Set up environment variables**:
   Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```
3. **Start the server**:
    ```bash
    npm start
    ```
