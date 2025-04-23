
const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">6. Competitions, Hackathons, & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3">One among Dean's top 10 % students at University</h3>
            <p className="text-gray-700 mb-4">
              For good academic performance and extra-curricular activities at University.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/afa/fff?text=Dean's+List" 
                alt="Dean's List Achievement" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Achievement 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3">Secured 3rd rank in the Hackathon HACKOVERFLOW 5.0</h3>
            <p className="text-gray-700 mb-4">
              Participated and ranked 3rd in the Hackathon organized by NIT Durgapur.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/faf/fff?text=Hackathon" 
                alt="Hackathon Achievement" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
          
          {/* Achievement 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-3">Received letter of appreciation from Mr. Rajnath Singh (Defence Minister of India)</h3>
            <p className="text-gray-700 mb-4">
              For exceptional performance in AISSEE.
            </p>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/300x200/ffa/fff?text=Appreciation+Letter" 
                alt="Appreciation Letter" 
                className="rounded-md shadow-sm max-w-full h-auto" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
