
const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-blue-200/50 decoration-4 underline-offset-8">4. Certifications & Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Certification 1 */}
          <CertCard 
            title="Introduction to Large Language Models by Google Cloud"
            subtitle="- Coursera"
            date="Mar’ 2024"
            img="https://placehold.co/300x200/4dc/fff?text=Google+Cloud+LLM"
            alt="Google Cloud LLM"
          />
          <CertCard 
            title="ChatGPT Advanced Data Analysis"
            subtitle="- Vanderbilt University"
            date="Apr’ 2024"
            img="https://placehold.co/300x200/0cf/fff?text=ChatGPT+Data"
            alt="ChatGPT Data"
          />
          <CertCard 
            title="Full-Stack Development Using MERN Stack"
            subtitle="- CipherSchools"
            date="Aug’ 2024"
            img="https://placehold.co/300x200/c4f/333?text=MERN+Stack"
            alt="MERN Stack"
          />
        </div>
      </div>
    </section>
  );
};

type CertCardProps = {
  title: string;
  subtitle: string;
  date: string;
  img: string;
  alt: string;
};

const CertCard = ({ title, subtitle, date, img, alt }: CertCardProps) => (
  <div className="bg-white card-gradient p-6 rounded-2xl shadow-lg flex flex-col items-center group transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-100 relative overflow-hidden hover:z-10">
    <h3 className="text-lg font-bold mb-2 text-center text-gray-800">{title}</h3>
    <p className="text-gray-600 mb-2 text-center">{subtitle}<br /><span className="text-xs">{date}</span></p>
    <img src={img} alt={alt} className="rounded-md shadow max-w-full h-auto mb-2 group-hover:scale-105 transition-transform" />
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 pointer-events-none" style={{background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"}} />
  </div>
);

export default CertificationsSection;
