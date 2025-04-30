import React, { useState } from 'react';

type CertCardProps = {
  title: string;
  subtitle: string;
  date: string;
  img: string;
  alt: string;
};

const CertCard = ({ title, subtitle, date, img, alt }: CertCardProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageDoubleClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseModal = () => {
    setIsImageOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow border border-gray-100 flex flex-col items-center">
      <div className="mb-2 text-center h-24 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">
          {subtitle}<br />
          <span className="text-xs">{date}</span>
        </p>
      </div>

      {/* No hover/touch animation */}
      <img 
        src={img} 
        alt={alt} 
        className="rounded-md shadow h-48 w-80 object-cover mb-2 cursor-pointer"
        onDoubleClick={handleImageDoubleClick}
      />

      {/* Fullscreen modal image on double click */}
      {isImageOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="relative">
            <img 
              src={img} 
              alt={alt} 
              className="max-w-full max-h-screen object-contain rounded"
            />
            <button 
  onClick={handleCloseModal} 
  className="absolute top-4 right-4 text-white bg-black/60 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/80 transition-all"
  aria-label="Close modal"
>
  ✕
</button>
          </div>
        </div>
      )}
    </div>
  );
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-blue-200/50 decoration-4 underline-offset-8">
          4. Certifications & Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CertCard 
            title="Data Structures & Algorithms - Interview Preparation"
            subtitle="- CipherSchools"
            date="Sep’ 2024"
            img="cp1.png"
            alt="CipherSchools DSA"
          />
          <CertCard 
            title="Full-Stack Development Using MERN Stack"
            subtitle="- CipherSchools"
            date="July’ 2024"
            img="cp2.png"
            alt="MERN Stack"
          />
          <CertCard 
            title="Introduction to Large Language Models by Google Cloud"
            subtitle="- Coursera"
            date="Jan’ 2024"
            img="goog.jpeg"
            alt="Google Cloud LLM"
          />
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
