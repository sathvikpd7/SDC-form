import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const API_URL = 'http://localhost:5000/api';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    departmentYear: '',
    experience: 'Beginner',
    languages: '',
    pastProjects: '',
    domain: 'Web Development',
    tools: '',
    motivation: '',
    skills: '',
    githubLink: '',
    linkedinLink: '',
    portfolioLink: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      setMessage({
        type: 'success',
        text: 'Registration successful! We will contact you soon.'
      });
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        college: '',
        departmentYear: '',
        experience: 'Beginner',
        languages: '',
        pastProjects: '',
        domain: 'Web Development',
        tools: '',
        motivation: '',
        skills: '',
        githubLink: '',
        linkedinLink: '',
        portfolioLink: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({
        type: 'error',
        text: error.message === 'Failed to fetch' 
          ? 'Unable to connect to the server. Please check your internet connection and try again.'
          : error.message || 'Error submitting form. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Join SDC - Registration Form
          </h2>

          {message.text && (
            <div className={`mb-6 p-4 rounded-md ${
              message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">College/University *</label>
                <input
                  type="text"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Department & Year *</label>
                <input
                  type="text"
                  name="departmentYear"
                  value={formData.departmentYear}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Programming Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">GitHub Profile Link *</label>
                <input
                  type="url"
                  name="githubLink"
                  value={formData.githubLink}
                  onChange={handleChange}
                  required
                  placeholder="https://github.com/username"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">LinkedIn Profile Link (Optional)</label>
                <input
                  type="url"
                  name="linkedinLink"
                  value={formData.linkedinLink}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Portfolio Link (Optional)</label>
                <input
                  type="url"
                  name="portfolioLink"
                  value={formData.portfolioLink}
                  onChange={handleChange}
                  placeholder="https://portfolio.com"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Technical Information */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Programming Languages *</label>
              <textarea
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                required
                placeholder="e.g., Python, JavaScript, Java"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Past Projects</label>
              <textarea
                name="pastProjects"
                value={formData.pastProjects}
                onChange={handleChange}
                placeholder="Describe your past projects (if any)"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Domain of Interest *</label>
              <select
                name="domain"
                value={formData.domain}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="AI/ML">AI/ML</option>
                <option value="Competitive Programming">Competitive Programming</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="UI/UX">UI/UX</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Familiar Tools & Technologies *</label>
              <textarea
                name="tools"
                value={formData.tools}
                onChange={handleChange}
                required
                placeholder="e.g., React, Node.js, Git"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Motivation to Join SDC *</label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                required
                placeholder="Why do you want to join SDC?"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Skills You Want to Gain *</label>
              <textarea
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                required
                placeholder="What skills are you looking to develop?"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                rows="3"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 border border-transparent text-base font-medium rounded-md text-white 
                  ${isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'} 
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegistrationForm;