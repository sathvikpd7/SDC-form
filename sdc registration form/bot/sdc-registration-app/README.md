# Software Development Club Registration System

A modern web application for managing student registrations for the Developer Club. Built with React, Node.js, Express, and PostgreSQL.

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Comprehensive registration form with validation
- PostgreSQL database integration
- Real-time form validation and error handling
- Secure data storage and handling

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm (Node Package Manager)

## Project Structure

```
sdc-registration-app/
├── frontend/               # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   └── ...
│   ├── package.json
│   └── ...
└── backend/               # Node.js backend
    ├── config/           # Database configuration
    ├── models/          # Sequelize models
    ├── routes/          # Express routes
    ├── package.json
    └── server.js
```

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd sdc-registration-app
   ```

2. **Set up the backend**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```
   PORT=5000
   DB_USER=postgres
   DB_PASSWORD=your_password
   DB_NAME=sdc_db
   DB_HOST=localhost
   DB_PORT=5432
   ```

3. **Set up the database**
   - Create a PostgreSQL database named `sdc_db`
   - The tables will be automatically created when you start the backend

4. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The server will run on http://localhost:5000

2. **Start the frontend development server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on http://localhost:5173

## API Endpoints

- `POST /api/register` - Register a new student
  - Required fields: fullName, email, phone, college, departmentYear, experience, languages, domain, tools, motivation, skills, githubLink
  - Optional fields: pastProjects, linkedinLink, portfolioLink

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 
