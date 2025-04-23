
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">3. Projects</h2>
        <div className="space-y-16">
          {/* Project 1: TRIPPER */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">TRIPPER (Travel Planner Website)</h3>
              <p className="italic mb-2">JavaScript, NodeJS, MongoDB</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Led development of TRIPPER, a cutting-edge travel planning app, leveraging React.js and Node.js</li>
                <li>Designed features for itinerary creation, real-time weather updates, and personalized recommendations</li>
                <li>Achieved top performance and demonstrated leadership and innovation at Lovely Professional University</li>
                <li>Integrated Google Maps API for enhanced navigation and location-based suggestions</li>
              </ul>
              <span className="block text-sm text-gray-500">Nov’ 2024 – Jan’ 2025</span>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/9df9cab5-05d9-47f6-b72b-721ccaa59a9b.png"
                alt="Tripper Project" 
                className="rounded-md shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
          {/* Project 2: NOTE APP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">NOTE APP</h3>
              <p className="italic mb-2">JavaScript, Node.js, MongoDB, ReactJS</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Created a comprehensive note management web app using React.js and Node.js, focusing on user authentication and note management features</li>
                <li>Developed functionalities for users to create, view, and delete notes with search and dark/light modes</li>
                <li>Optimized database queries and improved performance and user experience</li>
              </ul>
              <span className="block text-sm text-gray-500">Jun’ 2024 – Oct’ 2024</span>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/600x400/829/fff?text=Note+App"
                alt="Note App Project"
                className="rounded-md shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
          {/* Project 3: LIZA CREATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">LIZA CREATION</h3>
              <p className="italic mb-2">JavaScript, ReactJS, NodeJS, MongoDB</p>
              <ul className="list-disc pl-5 text-gray-700 mb-4">
                <li>Developed a comprehensive website for a boutique focusing on showcasing products and managing customer interactions</li>
                <li>Implemented features for product display and customer inquiries for seamless operations</li>
                <li>Integrated an admin dashboard with a responsive UI and optimized backend services</li>
              </ul>
              <span className="block text-sm text-gray-500">Jan’ 2024 – May’ 2024</span>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/600x400/ccf/333?text=LIZA+Creation"
                alt="LIZA Project"
                className="rounded-md shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

