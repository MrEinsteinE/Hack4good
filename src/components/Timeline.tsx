import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    { date: 'Feb 21, 2025', event: 'Registration Opens' },
    { date: 'Mar 15, 2025', event: 'Submission Deadline' },
    { date: 'Mar 21, 2025', event: 'Hackathon Begins' },
    { date: 'Mar 22, 2025', event: 'Winners Announced' },
  ];

  return (
    <section id="timeline" className="py-16 bg-black text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Timeline</h2>
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center space-y-4 lg:flex-row lg:items-center lg:space-x-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Event Date with Hover Effect */}
              <motion.div
                className="bg-gray-800 text-white p-4 rounded-full shadow-lg mb-4 lg:mb-0 cursor-pointer"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="font-semibold">{event.date}</p>
              </motion.div>

              {/* Event Description with Hover Effect */}
              <motion.div
                className="w-full max-w-md py-2 px-6 bg-gray-800 border-l-4 border-blue-800 cursor-pointer"
                whileHover={{ scale: 1.05, backgroundColor: '#2b6cb0' }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-lg">{event.event}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
