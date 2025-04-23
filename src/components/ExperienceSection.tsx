
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">5. Experience (Internships & Work)</h2>
        
        <div className="space-y-12">
          {/* Experience 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Optmyzr - SDE Intern: PPC Management Software Company</h3>
                <span className="text-gray-600 whitespace-nowrap">(Since March 2023)</span>
              </div>
              
              <h4 className="font-bold mb-2">Roles and Responsibilities:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Integrated Google Ads and Bing Ads APIs into Optmyzr's backend infrastructure using .NET. 
                </li>
                <li>
                  Enhanced the user interface of Optmyzr's web application using React, PHP, and CoffeeScript.
                </li>
              </ul>
              <div className="mt-3">
                <h4 className="font-bold">Tech stacks used:</h4>
                <p className="text-gray-700">Redux, C#, CodeIgniter, .NET Framework, React.js, PHP</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/500x300/ff9/333?text=Optmyzr+Team" 
                alt="Optmyzr Team" 
                className="rounded-md shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">Payben Private Limited- Freelancer</h3>
                <span className="text-gray-600 whitespace-nowrap">(April 2022 - March 2023)</span>
              </div>
              
              <h4 className="font-bold mb-2">Project Overview:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  Re-developed a recharge and bill payment platform for the startup called Payben.
                </li>
                <li>
                  Managed recharge services, guaranteed rewards.
                </li>
                <li>
                  Enabled users to become agents and further offer mobile recharge services.
                </li>
              </ul>
              <div className="mt-3">
                <h4 className="font-bold">Tech stacks used:</h4>
                <p className="text-gray-700">Android and Web platforms</p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/500x300/f59/fff?text=Payben" 
                alt="Payben" 
                className="rounded-md shadow-lg max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
