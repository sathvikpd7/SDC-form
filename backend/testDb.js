import sequelize from './config/database.js';
import Registration from './models/Registration.js';

async function testDatabase() {
  try {
    // Test connection
    await sequelize.authenticate();
    console.log('✅ Connection test successful');

    // Sync models
    await sequelize.sync({ force: false });
    console.log('✅ Models synchronized');

    // Test creating a record
    const testRegistration = await Registration.create({
      fullName: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      college: 'Test College',
      departmentYear: 'CS 2nd Year',
      experience: 'Beginner',
      languages: 'JavaScript, Python',
      domain: 'Web Development',
      tools: 'VS Code, Git',
      motivation: 'Want to learn',
      skills: 'Basic programming',
      githubLink: 'https://github.com/test'
    });
    console.log('✅ Test record created:', testRegistration.id);

    // Clean up test data
    await testRegistration.destroy();
    console.log('✅ Test record cleaned up');

  } catch (error) {
    console.error('❌ Database test failed:', error);
  } finally {
    // Close the connection
    await sequelize.close();
    console.log('✅ Connection closed');
  }
}

testDatabase(); 