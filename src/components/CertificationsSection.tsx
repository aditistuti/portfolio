
const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">4. Certifications & Courses</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Complete Interview Preparation</h3>
            <p className="text-gray-600 mb-4">- by GFG</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/5f5/fff?text=GFG+Certificate" 
                alt="GFG Certificate" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Certification 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Development in Flutter</h3>
            <p className="text-gray-600 mb-4">- by Programming Pathsala</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/55f/fff?text=Flutter+Certificate" 
                alt="Flutter Certificate" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Certification 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">100 Days of Code: The Complete Python Pro Bootcamp for 2023</h3>
            <p className="text-gray-600 mb-4">- by Udemy</p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/f55/fff?text=Udemy+Certificate" 
                alt="Udemy Certificate" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
