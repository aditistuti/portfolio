
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-playfair font-bold text-center mb-8">
          ADITI STUTI
        </h1>
        <div className="text-center mb-4">
          <span className="font-semibold text-lg mr-2">+91 9508660033</span> | 
          <a href="mailto:sinha.khushi403@gmail.com" className="text-blue-600 hover:underline mx-2">sinha.khushi403@gmail.com</a> | 
          <a href="https://linkedin.com/in/aditi-stuti" className="text-blue-600 hover:underline mx-2">Linkedin</a> | 
          <a href="https://github.com/" className="text-blue-600 hover:underline mx-2">Github</a> | 
          <a href="https://leetcode.com/" className="text-blue-600 hover:underline mx-2">Leetcode</a>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-playfair font-bold mb-6">1. Welcome to My Portfolio!</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="md:order-2 flex-shrink-0">
              <img
                src="/lovable-uploads/d5d45bd3-6580-41be-bf26-545590d4ac21.png"
                alt="Aditi Stuti"
                className="w-48 h-auto rounded-md shadow-md"
              />
            </div>
            <div className="md:order-1 flex-1">
              <h3 className="text-xl font-bold mb-3">About Me</h3>
              <p className="text-gray-700 mb-4">
                Hi, I'm <span className="font-semibold">Aditi Stuti</span>, a dedicated B.Tech Computer Science student,
                passionate about full-stack development, solving complex problems, and applying technology to build impactful solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Experienced in modern frameworks and a wide array of technologies. Eager to contribute and continue growing in innovative environments.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">Contact Me:</span> +91 9508660033
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">Email:</span> sinha.khushi403@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">LinkedIn:</span>
                  <a href="https://linkedin.com/in/aditi-stuti" className="text-blue-600 hover:underline">
                    linkedin.com/in/aditi-stuti
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-5 h-5 text-gray-700" />
                  <span className="font-semibold">GitHub:</span>
                  <a href="https://github.com/" className="text-blue-600 hover:underline">
                    github.com/
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <Button variant="outline" className="mt-2">
                    Download CV
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Phone icon component
const PhoneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
};

export default AboutSection;
