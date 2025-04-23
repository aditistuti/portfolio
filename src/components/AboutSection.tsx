
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Name */}
        <div className="flex flex-col items-center text-center mb-6 gap-3 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold tracking-wide text-gray-900 drop-shadow">
            ADITI <span className="text-violet-600">STUTI</span>
          </h1>
        </div>

        {/* Welcome headline */}
        <div className="text-center mt-2 mb-10 animate-fade-in">
          <h2 className="text-xl md:text-2xl font-semibold font-playfair mb-1 tracking-wide text-gray-800">
            Welcome to My Portfolio!
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar + Download CV Button */}
          <div className="md:order-2 flex-shrink-0 flex flex-col items-center gap-3 animate-fade-in">
            <img
              src="/lovable-uploads/d5d45bd3-6580-41be-bf26-545590d4ac21.png"
              alt="Aditi Stuti"
              className="w-44 h-44 md:w-52 md:h-52 rounded-xl border-4 border-blue-100 shadow-lg object-cover mb-2"
            />
            <Button
              asChild
              variant="outline"
              className="group bg-violet-50 border-violet-200 hover:bg-violet-100 text-violet-700 font-bold flex items-center gap-2 px-6 py-2 transition focus-visible:ring-violet-500"
            >
              <a
                href="/resume/aditi-stuti-resume.pdf"
                download
                aria-label="Download CV"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5 text-violet-700 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
          </div>
          {/* Info Card */}
          <div className="md:order-1 flex-1 bg-gradient-to-br from-white via-blue-50 to-blue-100/70 rounded-2xl shadow-lg p-8 border border-blue-100 animate-fade-in">
            <h3 className="text-lg md:text-xl font-bold text-violet-900 mb-3">About Me</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hi, I'm <span className="font-semibold text-violet-700">Aditi Stuti</span>, a dedicated <b>B.Tech Computer Science</b> student passionate about <b>full-stack development</b>, solving complex problems, and building impactful solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Experienced in modern frameworks and a wide array of technologies. Eager to contribute and continue growing in innovative environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
