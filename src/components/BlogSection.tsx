
const BlogSection = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-playfair font-bold mb-10">7. Blog & Youtube Channel</h2>
        
        {/* Blog */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Link to my Blog: 
            <a href="https://aaravmehta.hashnode.dev/" className="text-blue-600 hover:underline ml-2">
              https://aaravmehta.hashnode.dev/
            </a>
          </h3>
          
          <h4 className="text-lg font-bold mb-4">My Articles:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article 1 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://placehold.co/600x300/5cf/fff?text=Open+Source" 
                alt="Open Source Article" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">How I got selected for Google Summer of Code'24 and Summer of Bitcoin'24</h5>
                <p className="text-gray-700 line-clamp-3">
                  A detailed guide on my experience getting selected for prestigious open source programs...
                </p>
              </div>
            </div>
            
            {/* Article 2 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://placehold.co/600x300/fc5/fff?text=Bitcoin" 
                alt="Bitcoin Article" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">Halfway Through Summer of Bitcoin 2024: My Experience at Robosats</h5>
                <p className="text-gray-700 line-clamp-3">
                  An update on my progress and learnings halfway through the Summer of Bitcoin program...
                </p>
              </div>
            </div>
            
            {/* Article 3 */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <img 
                src="https://placehold.co/600x300/5fc/fff?text=GA4GH" 
                alt="GA4GH Article" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h5 className="text-lg font-bold mb-2">My experience in GA4GH #GSoC 24</h5>
                <p className="text-gray-700 line-clamp-3">
                  Documenting my journey in the Google Summer of Code with the Global Alliance for Genomics and Health...
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* YouTube */}
        <div>
          <h3 className="text-xl font-bold mb-4">Link to my Youtube Channel: 
            <a href="https://www.youtube.com/@lifewidabi" className="text-blue-600 hover:underline ml-2">
              https://www.youtube.com/@lifewidabi
            </a>
          </h3>
          
          <div className="flex justify-center">
            <div className="w-full max-w-3xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
              <div className="relative" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                  <div className="text-center p-6">
                    <h4 className="text-lg font-bold mb-2">My 12 Lakh Placement Journey | LPU Convocation 2024</h4>
                    <p className="text-gray-700 mb-4">162,243 views • 1 year ago</p>
                    <div className="flex justify-center">
                      <div className="bg-red-600 text-white py-2 px-6 rounded-full flex items-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 16.5v-9l6 4.5-6 4.5z" />
                        </svg>
                        <span>Play</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Apply Now (Link):</span> https://bit.ly/qLpuForm2023
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">Note:</span> Get 50% Cashback on the Application form(For limited time period)
                </p>
                <p className="text-gray-700 mb-4">
                  <span className="font-bold">Dear Candidate Apply in LPU for:</span> Engineering, MBA, Law, Fashion, Design, Pharmacy, BBA/BCA, Journalism & Mass Communication, Modern Media, and many more.
                </p>
                <button className="text-blue-600 font-semibold hover:underline">READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
