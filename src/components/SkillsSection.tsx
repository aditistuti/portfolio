
const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-blue-200/50 decoration-4 underline-offset-8">2. Technical Skills</h2>
        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Languages & Frameworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SkillCard 
                title="Java" 
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/java-14.svg"
              />
              <SkillCard 
                title="C++" 
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/c.svg"
              />
              <SkillCard 
                title="SQL" 
                level="Intermediate"
                icon="mysql.svg"
              />
              <SkillCard 
                title="JavaScript"
                level="Advanced"
                icon="jas.svg"
              />
              <SkillCard 
                title="HTML/CSS"
                level="Advanced"
                icon="html.svg"
              />
              <SkillCard 
                title="PHP"
                level="Intermediate"
                icon="php.svg"
              />
              <SkillCard 
                title="ReactJS"
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              />
              <SkillCard 
                title="Node.js"
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
              />
              <SkillCard 
                title="Laravel"
                level="Intermediate"
                icon="https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
              />
            </div>
          </div>
          {/* DSA & Developer Tools */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-700">Developer Tools & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SkillCard 
                title="Git, VS Code, IntelliJ" 
                level="Tools"
                icon="https://cdn.worldvectorlogo.com/logos/git-icon.svg"
              />
              <SkillCard 
                title="ExpressJS, JQuery, Mongoose" 
                level="Libraries"
                icon="https://cdn.worldvectorlogo.com/logos/express-109.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type SkillCardProps = {
  title: string;
  level: string;
  icon: string;
};

const SkillCard = ({ title, level, icon }: SkillCardProps) => {
  return (
    <div className="bg-white card-gradient p-6 rounded-2xl shadow-lg flex flex-col items-center text-center group transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 relative overflow-hidden hover:z-10">
      <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4 transition-transform group-hover:scale-110" />
      <h4 className="text-lg font-bold text-gray-800">{title}</h4>
      {level && <p className="text-xs text-gray-500 mt-1">({level})</p>}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 pointer-events-none" style={{background: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)"}} />
    </div>
  );
};

export default SkillsSection;
