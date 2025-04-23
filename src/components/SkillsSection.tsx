
const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">2. Skills & Technologies</h2>
        
        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-xl font-bold mb-6">Programming Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <SkillCard 
                title="Python" 
                level="Advanced" 
                icon="/lovable-uploads/c7486fde-222b-4f9a-b9ff-ca52743ef9fd.png" 
              />
              <SkillCard 
                title="Java" 
                level="" 
                icon="/lovable-uploads/45d18a7c-84db-4ba8-8311-b75871061bc1.png" 
              />
              <SkillCard 
                title="C++" 
                level="" 
                icon="/lovable-uploads/959e1771-acb1-4f6b-b682-00162e0536ce.png" 
              />
              <SkillCard 
                title="JavaScript" 
                level="Advanced" 
                icon="/lovable-uploads/1697901c-caf1-47b2-859b-d42ee99b181f.png" 
              />
            </div>
          </div>
          
          {/* Frontend Development */}
          <div>
            <h3 className="text-xl font-bold mb-6">Frontend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SkillCard 
                title="HTML5" 
                level="Advanced" 
                icon="/lovable-uploads/d439fe4e-25f7-4597-bf67-ef21a2702f84.png" 
              />
              <SkillCard 
                title="CSS3" 
                level="Advanced" 
                icon="/lovable-uploads/3013778c-c095-4c0c-a182-2ae2e38f0790.png" 
              />
              <SkillCard 
                title="Next.js" 
                level="Intermediate" 
                icon="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" 
              />
            </div>
          </div>
          
          {/* Backend Development */}
          <div>
            <h3 className="text-xl font-bold mb-6">Backend Development</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                title="Node.js" 
                level="Advanced" 
                icon="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" 
              />
              <SkillCard 
                title="Express.js" 
                level="Intermediate" 
                icon="https://cdn.worldvectorlogo.com/logos/express-109.svg" 
              />
            </div>
          </div>
          
          {/* Databases */}
          <div>
            <h3 className="text-xl font-bold mb-6">Databases</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <SkillCard 
                title="MySQL" 
                level="Intermediate" 
                icon="https://cdn.worldvectorlogo.com/logos/mysql-6.svg" 
              />
            </div>
          </div>
          
          {/* Cloud & DevOps */}
          <div>
            <h3 className="text-xl font-bold mb-6">Cloud & DevOps</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard 
                title="AWS" 
                level="Intermediate" 
                icon="https://cdn.worldvectorlogo.com/logos/aws-2.svg" 
              />
              <SkillCard 
                title="Docker" 
                level="Intermediate" 
                icon="https://cdn.worldvectorlogo.com/logos/docker.svg" 
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
