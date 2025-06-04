import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import registerRouter from './routes/register.js';
import sequelize from './config/database.js';
import './models/Registration.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // Vite's default port
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/register', registerRouter);

// Test route
app.get('/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Test database connection and sync models
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');
    
    // Sync all models with database
    await sequelize.sync({ alter: true });
    console.log('✅ All models were synchronized successfully.');
    
    return true;
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
    return false;
  }
};

// Start server
const startServer = async () => {
  const dbInitialized = await initializeDatabase();
  
  if (dbInitialized) {
    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`);
      console.log(`👉 API endpoint: http://localhost:${port}/api/register`);
    });
  } else {
    console.error('❌ Failed to initialize database. Server will not start.');
    process.exit(1);
  }
};

startServer();