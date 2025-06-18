import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Registration = sequelize.define('Registration', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  college: {
    type: DataTypes.STRING,
    allowNull: false
  },
  departmentYear: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experience: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Beginner', 'Intermediate', 'Advanced']]
    }
  },
  languages: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  pastProjects: {
    type: DataTypes.TEXT
  },
  domain: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tools: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  motivation: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  skills: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  githubLink: {
    type: DataTypes.STRING,
    allowNull: false
  },
  linkedinLink: {
    type: DataTypes.STRING
  },
  portfolioLink: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  underscored: true
});

export default Registration;