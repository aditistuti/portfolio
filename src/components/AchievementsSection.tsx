
const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">6. Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Achievement 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3 text-center">Dean’s List distinction in college</h3>
            <p className="text-gray-700 mb-2 text-center">
              Honored with Dean’s List distinction in college for ranking among the <span className="font-semibold">top 10%</span> of students.
            </p>
            <img 
              src="https://placehold.co/300x200/afa/fff?text=Dean's+List"
              alt="Dean's List Achievement"
              className="rounded-md shadow-sm max-w-full h-auto"
            />
          </div>
          {/* Achievement 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3 text-center">300+ coding problems solved</h3>
            <p className="text-gray-700 mb-2 text-center">
              Solved 300+ coding problems across various competitive programming platforms.
            </p>
            <img 
              src="https://placehold.co/300x200/5ca/fff?text=300%2B+Problems"
              alt="Coding Problems"
              className="rounded-md shadow-sm max-w-full h-auto"
            />
          </div>
          {/* Achievement 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <h3 className="text-lg font-bold mb-3 text-center">Selected for Round 2 of HP Power Lab</h3>
            <p className="text-gray-700 mb-2 text-center">
              Selected for Round 2 of HP Power Lab organized by Hindustan Petroleum Corporation Ltd.
            </p>
            <img 
              src="https://placehold.co/300x200/66f/fff?text=HP+Power+Lab"
              alt="HP Power Lab"
              className="rounded-md shadow-sm max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
