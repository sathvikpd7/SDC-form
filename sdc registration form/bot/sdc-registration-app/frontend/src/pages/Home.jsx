import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TimelineStep = ({ number, title, description }) => (
  <div className="relative">
    <div className="flex items-center">
      <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 rounded-full">
        <span className="text-white font-bold">{number}</span>
      </div>
      <div className="ml-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-gray-300 text-sm">{description}</p>
      </div>
    </div>
    {number < 4 && (
      <div className="absolute left-5 top-10 h-16 border-l-2 border-indigo-500 border-dashed"></div>
    )}
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Welcome to the Software Development Club (SDC)
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-12 max-w-3xl mx-auto">
                Empowering students with coding skills, collaboration, and innovation.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-colors duration-300 shadow-lg"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">About SDC</h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                SDC is a student-led community focused on fostering technical excellence and professional growth. 
                We provide a platform for students to learn, collaborate, and build real-world projects while 
                developing essential skills for their tech careers.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-gray-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Selection Process</h2>
            <div className="space-y-12 max-w-3xl mx-auto">
              <TimelineStep
                number="1"
                title="Application"
                description="Submit your application with required details"
              />
              <TimelineStep
                number="2"
                title="Shortlisting"
                description="Applications are reviewed by our team"
              />
              <TimelineStep
                number="3"
                title="Interview"
                description="Selected candidates will be called for an interview"
              />
              <TimelineStep
                number="4"
                title="Final Selection"
                description="Successful candidates will be notified"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to begin your coding journey?
            </h2>
            <Link
              to="/register"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-700 transition-colors duration-300"
            >
              Go to Registration
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home; 