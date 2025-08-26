# 🚀 Node.js Assignment 2 - Advanced Web Development

## 👨‍💻 Student Information
- **Name:** Raj Patel
- **Student ID:** 89
- **Course:** 701
- **Subject:** Application Development Using Full Stack
- **Assignment:** Assignment 2
- **Academic Year:** 2025-2026

## 📋 Assignment Overview
This repository contains comprehensive Node.js assignment solutions featuring 7 distinct projects that demonstrate advanced web development concepts including authentication systems, database integration, API development, and full-stack applications.

## Projects Overview

### P01 - User Registration Form with File Upload
A comprehensive user registration system built with Express.js that includes:
- Complete registration form with fields: username, password, confirm password, email, gender, hobbies
- Profile picture upload (single file) and multiple image uploads
- Form validation using express-validator with error handling
- Display of previous field values when validation fails
- Tabular display of all submitted data and uploaded images upon successful registration
- File download functionality with dedicated Express routes
- Technologies: Express.js, EJS templates, express-validator

### P02 - Express Login with File Session Store
A secure authentication system featuring:
- User login functionality with session management
- File-based session storage for persistent user sessions
- Session handling and user state management
- Secure logout functionality
- Technologies: Express.js, express-session with file store

### P03 - Express Login with Redis Session Store
An advanced authentication system implementing:
- User login system with Redis-based session storage
- High-performance session management using Redis
- Scalable session handling for production environments
- Enhanced security with Redis session store
- Technologies: Express.js, Redis, express-session

### P04 - ERP Admin Panel with Employee Management
A complete Enterprise Resource Planning admin system featuring:
- Admin authentication with secure session management
- CRUD operations for employee management (Create, Read, Update, Delete)
- Automatic employee ID and password generation
- Salary calculation system with Mongoose ODM
- Email notifications sent to employees upon registration
- Password encryption for enhanced security
- Secure admin logout functionality
- Technologies: Express.js, Mongoose, EJS templates, Nodemailer, bcrypt

### P05 - Employee Portal with JWT Authentication
A JAMStack employee portal system including:
- JWT-based authentication for secure employee login
- Employee profile display page with personal information
- Leave application system with date, reason, and approval status fields
- Add and list leave applications functionality
- Frontend built with HTML, CSS, JavaScript/jQuery
- RESTful API backend with Mongoose integration
- Secure logout with JWT token management
- Technologies: Express.js, Mongoose, JWT, HTML/CSS/JavaScript

### P06 - API Integration Utility
A practical application demonstrating:
- Integration with free external APIs for useful utilities
- Both frontend and backend API consumption
- Real-world API usage examples
- Error handling and response processing
- Technologies: Express.js, Axios/Fetch API, HTML/CSS/JavaScript

### P07 - E-commerce Shopping Cart System
A complete e-commerce platform with dual interfaces:
- Admin site for product and category management
- User site for shopping and cart functionality
- Two-level category hierarchy (main categories and subcategories)
- Product catalog with detailed product information
- Shopping cart functionality with add/remove items
- Category-based product filtering and organization
- Technologies: Express.js, EJS templates, Session management

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/Kevil-Gandhi/022_kevil_gandhi_701_A2.git
cd 022_kevil_gandhi_701_A2
```

2. Navigate to any project directory (P01-P07) and install dependencies:
```bash
cd P01  # or any other project directory
npm install
```

3. Run the application:
```bash
npm start
# or
node app.js
```

## Technologies Used
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose ODM, Redis
- **Template Engine:** EJS (Embedded JavaScript Templates)
- **Authentication:** JWT (JSON Web Tokens), Session Management
- **Validation:** express-validator
- **Security:** bcrypt for password encryption
- **Email:** Nodemailer for email notifications
- **Frontend:** HTML, CSS, JavaScript, jQuery
- **File Handling:** Multer for file uploads
- **Session Storage:** File-based sessions, Redis sessions
- **API Integration:** External API consumption

## 🎯 Learning Outcomes
Through these projects, the following concepts are demonstrated:
- Server-side development with Node.js and Express.js
- Database integration with MongoDB and Redis
- Authentication and authorization mechanisms
- File handling and validation
- RESTful API development
- Frontend-backend integration
- Session management and security
- Email integration and notifications

## 📁 Project Structure
```
022_kevil_gandhi_701_A2/
├── P01/                 # User Registration with File Upload
├── P02/                 # Express Login with File Sessions
├── P03/                 # Express Login with Redis Sessions
├── P04/                 # ERP Admin Panel
├── P05/                 # Employee Portal with JWT
├── P06/                 # API Integration Utility
├── P07/                 # E-commerce Shopping Cart
├── .gitignore          # Git ignore file
└── README.md           # Project documentation
```

## 🔧 Prerequisites
- Node.js (v14 or higher)
- MongoDB (for P04, P05, P07)
- Redis (for P03)
- Git

## 📝 Assignment Requirements
Each project fulfills specific academic requirements:
1. **Form Handling & Validation** - Express.js with comprehensive form processing
2. **Session Management** - File-based and Redis-based session storage
3. **Database Operations** - CRUD operations with Mongoose ODM
4. **Authentication Systems** - JWT and session-based authentication
5. **API Integration** - External API consumption and RESTful services
6. **Full-Stack Development** - Complete web applications with frontend and backend

## 👨‍🎓 Author
**Kevil Gandhi**  
- Student ID: 022
- Course: 701
- Email: kevilmgandhi@gmail.com
- GitHub: [@Kevil-Gandhi](https://github.com/Kevil-Gandhi)

## 📄 License
This project is created for academic purposes as part of Node.js coursework.

---
*Submitted as part of Node.js Web Development Course - Assignment 2*
