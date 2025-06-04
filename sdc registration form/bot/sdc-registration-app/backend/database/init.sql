
CREATE TABLE IF NOT EXISTS registrations (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  phone VARCHAR(20) NOT NULL,
  college VARCHAR(255) NOT NULL,
  department_year VARCHAR(100) NOT NULL,
  experience VARCHAR(20) NOT NULL CHECK (experience IN ('Beginner', 'Intermediate', 'Advanced')),
  languages TEXT NOT NULL,
  past_projects TEXT,
  domain VARCHAR(50) NOT NULL CHECK (domain IN ('Web Development', 'App Development', 'AI/ML', 'Competitive Programming', 'Cybersecurity', 'UI/UX')),
  tools TEXT NOT NULL,
  motivation TEXT NOT NULL,
  skills TEXT NOT NULL,
  github_link VARCHAR(255) NOT NULL,
  linkedin_link VARCHAR(255) DEFAULT NULL,
  portfolio_link VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
); 