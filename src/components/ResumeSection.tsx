
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">8. Resume</h2>
        
        <div className="text-center">
          <p className="text-lg mb-6">Add a downloadable resume (PDF format).</p>
          
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Example:</h3>
            <Button className="flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </Button>
          </div>
          
          <div className="w-20 h-1 bg-gray-300 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
