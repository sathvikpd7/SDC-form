import express from 'express';
import Registration from '../models/Registration.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      college,
      departmentYear,
      experience,
      languages,
      pastProjects,
      domain,
      tools,
      motivation,
      skills,
      githubLink,
      linkedinLink,
      portfolioLink
    } = req.body;

    // Check if email already exists
    const existingRegistration = await Registration.findOne({
      where: { email }
    });

    if (existingRegistration) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Validate required fields
    if (!githubLink) {
      return res.status(400).json({ message: 'GitHub profile link is required' });
    }

    // Create new registration
    const registration = await Registration.create({
      fullName,
      email,
      phone,
      college,
      departmentYear,
      experience,
      languages,
      pastProjects,
      domain,
      tools,
      motivation,
      skills,
      githubLink,
      linkedinLink,
      portfolioLink
    });

    res.status(201).json({
      message: 'Registration successful',
      data: registration
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      message: 'Error saving registration. Please try again.',
      error: error.message
    });
  }
});

export default router;