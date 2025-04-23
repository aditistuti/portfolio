
const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-pink-200/70 decoration-4 underline-offset-8">6. Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AchieveCard
            title="Dean’s List distinction in college"
            desc={
              <>
                Honored with Dean’s List distinction in college for ranking among the <span className="font-semibold">top 10%</span> of students.
              </>
            }
            img="https://placehold.co/300x200/afa/fff?text=Dean's+List"
            alt="Dean's List Achievement"
          />
          <AchieveCard
            title="300+ coding problems solved"
            desc={
              <>
                Solved 300+ coding problems across various competitive programming platforms.
              </>
            }
            img="https://placehold.co/300x200/5ca/fff?text=300%2B+Problems"
            alt="Coding Problems"
          />
          <AchieveCard
            title="Selected for Round 2 of HP Power Lab"
            desc={
              <>
                Selected for Round 2 of HP Power Lab organized by Hindustan Petroleum Corporation Ltd.
              </>
            }
            img="https://placehold.co/300x200/66f/fff?text=HP+Power+Lab"
            alt="HP Power Lab"
          />
        </div>
      </div>
    </section>
  );
};

type AchieveProps = {
  title: string;
  desc: React.ReactNode;
  img: string;
  alt: string;
};

const AchieveCard = ({ title, desc, img, alt }: AchieveProps) => (
  <div className="bg-white card-gradient p-6 rounded-2xl shadow-lg flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 relative overflow-hidden">
    <h3 className="text-lg font-bold mb-3 text-center text-gray-800">{title}</h3>
    <p className="text-gray-700 mb-2 text-center">{desc}</p>
    <img 
      src={img}
      alt={alt}
      className="rounded-md shadow max-w-full h-auto group-hover:scale-105 transition-transform"
    />
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 pointer-events-none" style={{background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"}} />
  </div>
);

export default AchievementsSection;
