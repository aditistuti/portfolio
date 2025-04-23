
const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">2. Technical Skills</h2>
        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-bold mb-6">Languages & Frameworks</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard 
                title="Java" 
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/java-14.svg"
              />
              <SkillCard 
                title="C/C++" 
                level="Advanced"
                icon="https://cdn.worldvectorlogo.com/logos/c.svg"
              />
              <SkillCard 
                title="SQL" 
                level="Intermediate"
                icon="https://cdn.worldvectorlogo.com/logos/mysql-6.svg"
              />
              <SkillCard 
                title="JavaScript"
                level="Advanced"
                icon="/lovable-uploads/1697901c-caf1-47b2-859b-d42ee99b181f.png"
              />
              <SkillCard 
                title="HTML/CSS"
                level="Advanced"
                icon="/lovable-uploads/d439fe4e-25f7-4597-bf67-ef21a2702f84.png"
              />
              <SkillCard 
                title="PHP"
                level="Intermediate"
                icon="https://cdn.worldvectorlogo.com/logos/php-1.svg"
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
            <h3 className="text-xl font-bold mb-6">Developer Tools & Libraries</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <img src={icon} alt={title} className="w-20 h-20 object-contain mb-4" />
      <h4 className="text-lg font-bold">{title}</h4>
      {level && <p className="text-sm text-gray-600">({level})</p>}
    </div>
  );
};

export default SkillsSection;

