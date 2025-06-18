import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'sdc_db',
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres123',
  logging: console.log, // Enable logging to see SQL queries
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

console.log('Attempting to connect to database with config:', {
  ...dbConfig,
  password: '****' // Hide password in logs
});

const sequelize = new Sequelize(dbConfig);

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Database connection has been established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err.message);
    console.error('Error details:', err);
  });

export default sequelize; 