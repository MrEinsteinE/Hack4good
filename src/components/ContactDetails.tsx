import React from 'react';

const ContactDetails = () => {
  return (
    <section id="contact" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Contact Details</h2>
        
        <div className="space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <span className="font-semibold">A Varshith</span>
            <span className="text-blue-300">+91 79819 42704</span>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <span className="font-semibold">G Shyam Chetan</span>
            <span className="text-blue-300">+91 90000 91248</span>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <span className="font-semibold">G Naga Mukesh</span>
            <span className="text-blue-300">+91 63025 99711</span>
          </div>
          
          <div className="flex justify-center items-center space-x-4">
            <span className="font-semibold">K Ganesh</span>
            <span className="text-blue-300">+91 83410 28815</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
