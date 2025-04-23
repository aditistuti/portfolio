
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gradient-to-br from-[#fef9e7] via-[#f7f6f2] to-[#e8f6ef] transition-all"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-7 text-gray-900 underline decoration-blue-200/50 decoration-4 underline-offset-8 text-center tracking-wide drop-shadow-sm">
          8. Resume
        </h2>
        <div className="w-24 h-1 bg-blue-200 rounded-full mx-auto mb-9" />

        <div className="flex justify-center">
          <div className="rounded-2xl shadow-2xl bg-white/80 max-w-xl w-full px-8 py-10 flex flex-col items-center gap-6 border border-blue-100">
            <p className="text-xl md:text-2xl font-semibold font-playfair text-gray-700 text-center mb-1">
              Download my latest resume!
            </p>
            <p className="text-gray-500 text-center mb-3">
              Click below to get the up-to-date PDF of my professional CV.
            </p>
            <a
              href="/resume/aditi-stuti-resume.pdf"
              download
              className="w-full flex justify-center"
              tabIndex={-1}
            >
              <Button
                variant="outline"
                className="gap-2 text-white bg-gradient-to-r from-[#8B5CF6] via-[#9b87f5] to-[#7E69AB] font-semibold tracking-wider px-7 py-3 rounded-lg shadow-lg hover:from-[#7E69AB] hover:to-[#8B5CF6] hover:scale-105 transition-all duration-200"
              >
                <Download className="w-5 h-5" />
                Download Resume (PDF)
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

