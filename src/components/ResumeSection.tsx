
const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 bg-gradient-to-br from-[#fef9e7] via-[#f7f6f2] to-[#e8f6ef]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-8 text-gray-900 underline decoration-blue-200/50 decoration-4 underline-offset-8 text-center tracking-wide">
          8. Resume
        </h2>
        <div className="w-20 h-1 bg-blue-200 rounded-full mx-auto mb-10 transition-all" />
        {/* Placeholder for future resume display, kept section visually pleasing */}
        <div className="text-center text-gray-500 py-8 px-2 rounded-lg bg-white/60 max-w-xl mx-auto shadow inner-glow">
          <p className="text-lg opacity-80 font-medium tracking-normal">
            Resume information coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

