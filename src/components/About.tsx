import React from 'react';
import chandana from '../assets/images/photo (2).jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-6 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
       

      
{/* Text Section */}
<div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          {/* Image Section */}
        <div className="mb-6 lg:mb-0 flex justify-center">
  <img
    src={chandana}
    alt="Chandana - Software Developer"
    style={{ width: '128px', height: '128px', borderRadius: '50%', objectFit: 'cover' }}
  />
</div>
          <p className="text-lg">
            Hello! I’m Chandana, a passionate software developer with experience in Python, React,
            and modern web technologies. I love building clean and responsive user interfaces.
          </p>
        </div>

      </div>
      
    </section>
  );
};

export default About;

