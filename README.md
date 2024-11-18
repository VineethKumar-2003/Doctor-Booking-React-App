# Doctor Booking App

A full-stack web application for booking doctor appointments with essential features like user registration, login, profile management for both users and doctors, and seamless booking functionality. Built using the MERN (MongoDB, Express, React, Node.js) stack.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Setup](#project-setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Enhancements](#future-enhancements)
- [Contributors](#contributors)

---

## Features

### User Features
1. **Registration**: Users can sign up with their details.
2. **Login**: Secure authentication using JSON Web Tokens (JWT).
3. **Profile Management**: Update user profile information.
4. **Doctor Booking**: Browse available doctors and book an appointment.

### Doctor Features
1. **Registration and Login**: Similar to users, doctors can register and log in.
2. **Profile Management**: Update profile details like specialization, availability, and contact.

### Core Functionalities
- Secure password storage with `bcryptjs`.
- Role-based profile management for users and doctors.
- End-to-end protected API routes with JWT.
- Database interactions using MongoDB.

---

## Technologies Used

### Frontend
- **React** with **Vite**: A fast and optimized development environment for React.

### Backend
- **Node.js** with **Express.js**: Backend framework for handling API logic and server-side operations.
- **MongoDB**: Database for storing user, doctor, and booking data.

### Authentication & Security
- **JSON Web Token (JWT)**: Secure token-based authentication.
- **bcryptjs**: Password hashing for secure storage.

---

## Project Setup

### Prerequisites
- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB** (local or cloud-based like MongoDB Atlas)

### Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend

2. Setup the `frontend` folder:
   ```bash
   npm create vite@latest ./

3. Install the `dependencies` for frontend:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   npm i react-router-dom react-icons react-spinners react-toastify swiper

4. Start the development server:
   ```bash
   npm run dev

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend

2. Setup the `backend` folder:
   ```bash
   npm init

3. Install the `dependencies` for backend:
   ```bash
   npm i express mongodb mongoose cors jsonwebtoken cookie-parser dotenv bcryptjs nodemon

4. Set up environment variables: Create a `.env` file in the backend folder with the following:
   ```bash
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

5. Start the development server:
   ```bash
   npm run start-dev

---

## API Endpoints

### Authentication
- POST `{BASE_URL}/api/v1/auth/register` - Register a new user or doctor.
- POST `{BASE_URL}/api/v1/auth/login` - Login and get a JWT.

### User
- GET `{BASE_URL}/api/v1/users` - Fetch user profile details (JWT protected).
- PUT `{BASE_URL}/api/v1/users/{users._id}` - Update user profile details (JWT protected).

### Doctor
- GET `{BASE_URL}/api/v1/doctors` - Fetch doctor profile details (JWT protected).
- PUT `{BASE_URL}/api/v1/users/{doctors._id}` - Update doctor profile details (JWT protected).

---

## Folder Structure

```
DoctorBookingApp/
├── backend/
│   ├── auth/
│   │   └── verifyToken.js 
│   ├── Controllers/
│   │   ├── authController.js         
│   │   ├── userController.js        
│   │   ├── doctorController.js       
│   │   └── reviewController.js 
│   ├── models/
│   │   ├── UserSchema.js        
│   │   ├── DoctorSchema.js
│   │   ├── ReviewSchema.js    
│   │   └── BookingSchema.js      
│   ├── routes/
│   │   ├── auth.js         
│   │   ├── user.js        
│   │   ├── doctor.js       
│   │   └── review.js      
│   ├── server.js           
│   └── .env                
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
|   |   ├── assets/
|   |   |   ├── Images/
|   |   |   |   ├── about-card.png
|   |   |   |   ├── about.png
|   |   |   |   ├── avatar-icon.png
|   |   |   |   ├── Blur.png
|   |   |   |   ├── doctor-img01.png
|   |   |   |   ├── doctor-img02.png
|   |   |   |   ├── doctor-img03.png
|   |   |   |   ├── faq-img.png
|   |   |   |   ├── feature-img.png
|   |   |   |   ├── header-bg.png
|   |   |   |   ├── hero-bg.png
|   |   |   |   ├── hero-img01.png
|   |   |   |   ├── hero-img02.png
|   |   |   |   ├── hero-img03.png
|   |   |   |   ├── icon01.png
|   |   |   |   ├── icon02.png
|   |   |   |   ├── icon03.png
|   |   |   |   ├── logo.png
|   |   |   |   ├── mask.png
|   |   |   |   ├── patient-avatar.png
|   |   |   |   ├── signup.png
|   |   |   |   ├── Star.png
|   |   |   |   └── video-icon.png
|   |   |   ├── doctors.js
|   |   |   ├── faqs.js
|   |   |   └── services.js
|   |   ├── Components/
|   |   |   ├── About/
|   |   |   |   └── About.jsx
|   |   |   ├── Doctors/
|   |   |   |   ├── DoctorCard.jsx
|   |   |   |   └── DoctorList.jsx
|   |   |   ├── Error/
|   |   |   |   └── Error.jsx
|   |   |   ├── Faq/
|   |   |   |   ├── FaqItem.jsx
|   |   |   |   └── FaqList.jsx
|   |   |   ├── Footer/
|   |   |   |   └── Footer.jsx
|   |   |   ├── Header/
|   |   |   |   └── Header.jsx
|   |   |   ├── Loader/
|   |   |   |   └── Loading.jsx
|   |   |   ├── Services/
|   |   |   |   ├── ServiceCard.jsx
|   |   |   |   └── ServiceList.jsx
|   |   |   └── Testimonial/
|   |   |   └──  └── Testimonial.jsx
|   |   ├── context/
|   |   |   └── AuthContext.jsx
|   |   ├── Dashboard/
|   |   |   ├── doctor-account/
|   |   |   |   ├── Appointments.jsx
|   |   |   |   ├── Dashboard.jsx
|   |   |   |   ├── Profile.jsx
|   |   |   |   └── Tabs.jsx
|   |   |   └── user-account/
|   |   |   |   ├── MyAccount.jsx
|   |   |   |   ├── MyBookings.jsx
|   |   |   |   └── Profile.jsx
|   |   ├── hooks/
|   |   |   └── useFetchData.jsx
|   |   ├── layout/
|   |   |   └── Layout.jsx
|   |   ├── pages/
|   |   |   ├── Doctors/
|   |   |   |   ├── DoctorAbout.jsx
|   |   |   |   ├── DoctorDetails.jsx
|   |   |   |   ├── Doctors.jsx
|   |   |   |   ├── Feedback.jsx
|   |   |   |   ├── FeedbackForm.jsx
|   |   |   |   └── SidePanel.jsx
|   |   |   ├── Contact.jsx
|   |   |   ├── Home.jsx
|   |   |   ├── Login.jsx
|   |   |   ├── Services.jsx
|   |   |   └── Signup.jsx
|   |   ├── routes/
|   |   |   ├── ProtetedRoute.jsx
|   |   |   └── Routers.jsx
|   |   ├── App.css
|   |   ├── App.jsx
|   |   ├── config.js
|   |   ├── index.css
|   |   ├── main.jsx
│   ├── utils/
│   │   ├── convertTime.js       
│   │   ├── formateDate.js       
│   │   └── uploadCloudinary.js
│   ├── .env.local
│   ├── vite.config.js
│   └── package.json
├── README.md
```
