# Software Development Club Registration System

A modern web application for managing student registrations for the Developer Club. Built with React, Node.js, Express, PostgreSQL, and Firebase.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Firebase (Firestore)
- **Backend:** Node.js, Express, Sequelize ORM
- **Database:** PostgreSQL (backend), Firestore (frontend)

## Features

- Modern, responsive UI built with React and Tailwind CSS
- Comprehensive registration form with validation
- Stores registration data in Firebase Firestore
- Backend API and database ready for future integration
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
│   │   ├── firebase.js    # Firebase config
│   │   └── ...
│   ├── package.json
│   └── ...
└── backend/               # Node.js backend
    ├── config/           # Database configuration
    ├── database/         # SQL initialization scripts
    ├── models/           # Sequelize models
    ├── routes/           # Express routes
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
   - Create a PostgreSQL database named `sdc_db`.
   - (Optional) Initialize the schema manually:
     ```bash
     psql -U postgres -d sdc_db -f database/init.sql
     ```
   - The tables will also be automatically created when you start the backend.

4. **Set up the frontend**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory with your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
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

**Tip:** You can run both servers in separate terminals for development.

## Building for Production

To build the frontend for production:
```bash
cd frontend
npm run build
```
The production-ready files will be in `frontend/dist/`.

## Data Flow & API Endpoints

- **Current:** The registration form stores data directly in Firebase Firestore.
- **Backend API:**
  - `POST /api/register` - Register a new student (for future use)
    - Required fields: fullName, email, phone, college, departmentYear, experience, languages, domain, tools, motivation, skills, githubLink
    - Optional fields: pastProjects, linkedinLink, portfolioLink
- **To use the backend API:**
  - Update the frontend to send form data to `/api/register` using `fetch` or `axios` instead of Firestore.

## Tools & Libraries

- **Frontend:**
  - React, Vite, Tailwind CSS, Firebase, React Router, Headless UI, Heroicons
- **Backend:**
  - Express, Sequelize, pg, dotenv, cors, nodemon

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Contact & Support

For questions or support, please open an issue or contact the project maintainer.
