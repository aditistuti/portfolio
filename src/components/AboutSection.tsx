
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const CONTACTS = [
  {
    href: "mailto:sinha.khushi403@gmail.com",
    Icon: Mail,
    label: "sinha.khushi403@gmail.com",
    sr: "Email",
    color: "text-blue-600",
  },
  {
    href: "https://linkedin.com/in/aditi-stuti",
    Icon: Linkedin,
    label: "Linkedin",
    sr: "LinkedIn",
    color: "text-blue-700",
  },
  {
    href: "https://github.com/",
    Icon: Github,
    label: "Github",
    sr: "GitHub",
    color: "text-gray-800",
  },
  {
    href: "https://leetcode.com/",
    Icon: FileText,
    label: "Leetcode",
    sr: "Leetcode",
    color: "text-yellow-600",
  },
];

const PhoneIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header with centered name */}
        <div className="flex flex-col items-center text-center mb-8 gap-3">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold tracking-wide text-gray-900 drop-shadow">
            ADITI <span className="text-violet-600">STUTI</span>
          </h1>
        </div>
        
        {/* Welcome headline */}
        <div className="text-center mt-4 mb-10">
          <h2 className="text-xl md:text-2xl font-semibold font-playfair mb-1 tracking-wide text-gray-800">
            Welcome to My Portfolio!
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Avatar */}
          <div className="md:order-2 flex-shrink-0 flex flex-col items-center gap-3">
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
          <div className="md:order-1 flex-1 bg-gradient-to-br from-white via-blue-50 to-blue-100/70 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h3 className="text-lg md:text-xl font-bold text-violet-900 mb-3">About Me</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Hi, I'm <span className="font-semibold text-violet-700">Aditi Stuti</span>, a dedicated <b>B.Tech Computer Science</b> student passionate about <b>full-stack development</b>, solving complex problems, and building impactful solutions.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Experienced in modern frameworks and a wide array of technologies. Eager to contribute and continue growing in innovative environments.
            </p>
            {/* Contact links block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CONTACTS.map(({ href, Icon, label, sr, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 bg-white/80 shadow-sm hover:bg-blue-100 ${color} transition-all focus-visible:ring-2 focus-visible:ring-violet-500`}
                  aria-label={sr}
                >
                  <Icon className="w-5 h-5" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
              <div className="flex items-center gap-2 rounded-lg px-4 py-2 bg-white/80 shadow-sm text-gray-700">
                <PhoneIcon className="w-5 h-5" />
                <span className="truncate">+91 9508660033</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
