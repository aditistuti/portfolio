import React, { useState } from 'react';

type AchieveProps = {
  title: string;
  desc: React.ReactNode;
  img: string;
  alt: string;
  onDoubleClick: () => void;
};

const AchieveCard = ({ title, desc, img, alt, onDoubleClick }: AchieveProps) => (
  <div 
    className="bg-white card-gradient p-6 rounded-2xl shadow-lg flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 relative overflow-hidden"
    onDoubleClick={onDoubleClick}
  >
    <h3 className="text-lg font-bold mb-3 text-center text-gray-800">{title}</h3>
    <p className="text-gray-700 mb-2 text-center">{desc}</p>
    
    <img 
      src={img}
      alt={alt}
      className="rounded-md shadow w-80 h-48 object-cover mb-2 group-hover:scale-105 transition-transform"
    />

    <div 
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 pointer-events-none" 
      style={{ background: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" }} 
    />
  </div>
);

const AchievementsSection = () => {
  const [modalImg, setModalImg] = useState<string | null>(null);
  const [modalAlt, setModalAlt] = useState<string>("");

  const handleOpenModal = (img: string, alt: string) => {
    setModalImg(img);
    setModalAlt(alt);
  };

  const handleCloseModal = () => {
    setModalImg(null);
    setModalAlt("");
  };

  return (
    <section id="achievements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-pink-200/70 decoration-4 underline-offset-8">
          6. Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AchieveCard
            title="Dean’s List distinction in college"
            desc={<>Honored with Dean’s List distinction in college for ranking among the <span className="font-semibold">top 10%</span> of students.</>}
            img="https://placehold.co/300x200/afa/fff?text=Dean's+List"
            alt="Dean's List Achievement"
            onDoubleClick={() => handleOpenModal("https://placehold.co/600x400/afa/fff?text=Dean's+List", "Dean's List")}
          />
          <AchieveCard
            title="175+ coding problems solved"
            desc={<>Solved 175+ coding problems across various competitive programming platforms.</>}
            img="le.png"
            alt="Coding Problems"
            onDoubleClick={() => handleOpenModal("le.png", "Coding Problems")}
          />
          <AchieveCard
            title="Selected for Round 2 of HP Power Lab"
            desc={<>Selected for Round 2 of HP Power Lab organized by Hindustan Petroleum Corporation Ltd.</>}
            img="hpp.jpg"
            alt="HP Power Lab"
            onDoubleClick={() => handleOpenModal("hpp.jpg", "HP Power Lab")}
          />
        </div>
      </div>

      {/* Modal */}
      {modalImg && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative">
            <img 
              src={modalImg} 
              alt={modalAlt} 
              className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-lg border-4 border-white"
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
    </section>
  );
};

export default AchievementsSection;
