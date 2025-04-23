
const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">4. Certifications & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 text-center">Introduction to Large Language Models by Google Cloud</h3>
            <p className="text-gray-600 mb-2 text-center">- Coursera<br /><span className="text-xs">Mar’ 2024</span></p>
            <img src="https://placehold.co/300x200/4dc/fff?text=Google+Cloud+LLM" alt="Google Cloud LLM" className="rounded-md shadow-sm max-w-full h-auto" />
          </div>
          {/* Certification 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 text-center">ChatGPT Advanced Data Analysis</h3>
            <p className="text-gray-600 mb-2 text-center">- Vanderbilt University<br /><span className="text-xs">Apr’ 2024</span></p>
            <img src="https://placehold.co/300x200/0cf/fff?text=ChatGPT+Data" alt="ChatGPT Data" className="rounded-md shadow-sm max-w-full h-auto" />
          </div>
          {/* Certification 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-2 text-center">Full-Stack Development Using MERN Stack</h3>
            <p className="text-gray-600 mb-2 text-center">- CipherSchools<br /><span className="text-xs">Aug’ 2024</span></p>
            <img src="https://placehold.co/300x200/c4f/333?text=MERN+Stack" alt="MERN Stack" className="rounded-md shadow-sm max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
