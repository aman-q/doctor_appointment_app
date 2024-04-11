import React from 'react';

const CustomArticle = () => {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
      <img
        alt=""
        src="/contact.jpg"
        className="h-72 w-full object-cover"
      />

      <div className="p-4 sm:p-6">
        <a href="#">
          <h3 className="text-3xl font-medium text-gray-900 flex justify-center items-center">
          ClinicClick: A Comprehensive Doctor Booking Website
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-m/relaxed text-gray-500 flex justify-center items-center">
        Welcome to ClinicClick, your comprehensive doctor booking website designed 
        to streamline your healthcare experience. At ClinicClick, we're dedicated to
         connecting patients with trusted healthcare professionals quickly and conveniently.
        </p>
        <p className="mt-2 line-clamp-3 text-m/relaxed text-gray-500 flex justify-center items-center">
        With ClinicClick, you can effortlessly find and book appointments with doctors
         across various specialties, ensuring you receive the care you need when you need it.
          Whether you're looking for a general practitioner, a specialist, 
        or a specific medical service, ClinicClick has you covered.
        </p>
        <p className="mt-2 line-clamp-3 text-m/relaxed text-gray-500 flex justify-center items-center">
        Our user-friendly platform allows you to browse through a wide range of healthcare providers,
         view their profiles, read reviews from other patients, and schedule appointments with just a few clicks.
          Say goodbye to long waiting times and endless phone calls - ClinicClick simplifies 
        the appointment booking process, putting control of your healthcare journey in your hands.
        </p>
        <p className="mt-2 line-clamp-3 text-m/relaxed text-gray-500 flex justify-center items-center">
        Have a question or need assistance? Our dedicated support
         team is here to help. Feel free to reach out to us with any inquiries, feedback,
          or concerns. Your satisfaction and well-being are our top priorities, 
        and we're committed to providing you with exceptional service every step of the way.
        </p>

        <p className="mt-2 line-clamp-3 text-m/relaxed text-gray-500 ">
        Thank you for choosing ClinicClick for your healthcare needs. 
        We look forward to serving you and  helping you achieve optimal health and wellness.
        </p>
         

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
        Contact us today & experience the convenience of ClinicClick!
        </a>
      </div>
    </article>
  );
};

export default CustomArticle;
