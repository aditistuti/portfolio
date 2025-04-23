
const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10 text-gray-800 underline decoration-violet-200/60 decoration-4 underline-offset-8">3. Projects</h2>
        <div className="space-y-16">
          {/* Project 1: TRIPPER */}
          <ProjectRow
            title="TRIPPER (Travel Planner Website)"
            tech="JavaScript, NodeJS, MongoDB"
            details={[
              "Led development of TRIPPER, a cutting-edge travel planning app, leveraging React.js and Node.js",
              "Designed features for itinerary creation, real-time weather updates, and personalized recommendations",
              "Achieved top performance and demonstrated leadership and innovation at Lovely Professional University",
              "Integrated Google Maps API for enhanced navigation and location-based suggestions"
            ]}
            date="Nov’ 2024 – Jan’ 2025"
            img="/lovable-uploads/9df9cab5-05d9-47f6-b72b-721ccaa59a9b.png"
            imgAlt="Tripper Project"
          />
          {/* Project 2: NOTE APP */}
          <ProjectRow
            title="NOTE APP"
            tech="JavaScript, Node.js, MongoDB, ReactJS"
            details={[
              "Created a comprehensive note management web app using React.js and Node.js, focusing on user authentication and note management features",
              "Developed functionalities for users to create, view, and delete notes with search and dark/light modes",
              "Optimized database queries and improved performance and user experience"
            ]}
            date="Jun’ 2024 – Oct’ 2024"
            img="https://placehold.co/600x400/829/fff?text=Note+App"
            imgAlt="Note App Project"
          />
          {/* Project 3: LIZA CREATION */}
          <ProjectRow
            title="LIZA CREATION"
            tech="JavaScript, ReactJS, NodeJS, MongoDB"
            details={[
              "Developed a comprehensive website for a boutique focusing on showcasing products and managing customer interactions",
              "Implemented features for product display and customer inquiries for seamless operations",
              "Integrated an admin dashboard with a responsive UI and optimized backend services"
            ]}
            date="Jan’ 2024 – May’ 2024"
            img="https://placehold.co/600x400/ccf/333?text=LIZA+Creation"
            imgAlt="LIZA Project"
          />
        </div>
      </div>
    </section>
  );
};

type ProjectRowProps = {
  title: string;
  tech: string;
  details: string[];
  date: string;
  img: string;
  imgAlt: string;
};

const ProjectRow = ({ title, tech, details, date, img, imgAlt }: ProjectRowProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-lg p-6 group transition-all duration-300 border border-gray-100 hover:shadow-2xl hover:scale-[1.025]">
    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="italic mb-2 text-violet-800">{tech}</p>
      <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
        {details.map((d, idx) => (
          <li key={idx}>{d}</li>
        ))}
      </ul>
      <span className="block text-sm text-gray-500">{date}</span>
    </div>
    <div className="flex justify-center">
      <img 
        src={img}
        alt={imgAlt}
        className="rounded-lg shadow-md max-w-full h-auto group-hover:scale-105 transition-transform"
      />
    </div>
  </div>
);

export default ProjectsSection;
