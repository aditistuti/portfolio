
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">3. Projects</h2>
        
        <div className="space-y-16">
          {/* Project 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Payben - Recharge and Bill Payment Platform</h3>
              <p className="text-gray-700 mb-4">
                Recharge and bill payment platform based on frameworks like bootstrap for front-end 
                development, MySQL as database, and made use of PHP for backend development. 
                Implemented Android application using MIT App Inventor (provided by Google). 
                Developed APIs to form a smooth interface between database and the platform.
              </p>
              <div className="mb-4">
                <h4 className="font-bold">Tech:</h4>
                <p className="text-gray-700">HTML, CSS, Javascript, Bootstrap, MySQL, PHP, MIT App Inventor</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/600x400/f87/fff?text=Payben+App" 
                alt="Payben Project" 
                className="rounded-md shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold mb-2">Optmyzr - Shareable Dashboards and White Label</h3>
              <p className="text-gray-700 mb-4">
                Shareable Dashboards is a live view of the Account Dashboard contains all the
                account reports, and can be shared externally as a link with clients or
                stakeholders. Enabled agency to add their company's and client's logo for
                customization of the dashboard, and setting up a Custom Domain for the
                dashboard.
              </p>
              <div className="mb-4">
                <h4 className="font-bold">Tech:</h4>
                <p className="text-gray-700">Tableau, SAP, DNS, SSL Certification, CNAME</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/600x400/57f/fff?text=Optmyzr+Dashboard" 
                alt="Optmyzr Project" 
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
