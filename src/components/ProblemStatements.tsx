import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProblemStatements = () => {
  const problems = [
    { 
      domain: 'Healthcare', 
      file: '/path/to/healthcare_problem.pdf'  // Replace with actual file path
    },
    { 
      domain: 'Education', 
      file: '/path/to/education_problem.pdf'  // Replace with actual file path
    },
    { 
      domain: 'Environment', 
      file: '/path/to/environment_problem.pdf'  // Replace with actual file path
    },
  ];

  return (
    <section id="problem-statements" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Problem Statements</h2>
        {problems.map((problem, index) => (
          <motion.div
            key={index}
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-md cursor-pointer flex justify-center items-center hover:bg-gray-700 transform transition duration-300 ease-in-out"
              onClick={() => window.location.href = problem.file}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold mb-2">{problem.domain}</h3>
                <FaDownload className="text-blue-400" />
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemStatements;
