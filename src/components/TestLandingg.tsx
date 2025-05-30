export const TestLandingg = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
              <h1 className="text-2xl font-bold text-blue-600 ml-3">AI Nexus</h1>
            </div>
            <div className="flex space-x-6 items-center">
              <a href="#mission" className="text-gray-600 hover:text-blue-600">
                Our Mission
              </a>
              <a href="#experiments" className="text-gray-600 hover:text-blue-600">
                AI Experiments
              </a>
              <a href="#courses" className="text-gray-600 hover:text-blue-600">
                Courses
              </a>
              <a href="#products" className="text-gray-600 hover:text-blue-600">
                AI Products
              </a>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Join the Future
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-500/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
              <span className="flex items-center">
                <span className="flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
                </span>
                Pioneering AI since 2023
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Where <span className="text-cyan-300">AI Curiosity</span> Meets 
              <br /> 
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Real-World Impact
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
              We're bridging the gap between AI theory and practical innovation. 
              Through cutting-edge experiments, transformative education, and 
              intelligent products, we're building tomorrow's AI ecosystem today.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-all transform hover:-translate-y-1 duration-300 shadow-lg shadow-cyan-500/30">
                Explore AI Lab
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
                Meet Our Researchers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-blue-900">Our Manifesto</h2>
              <div className="h-1 w-20 bg-cyan-500 mb-8"></div>
              <p className="text-2xl font-semibold text-gray-800 mb-6">
                "We believe AI should be <span className="text-cyan-600">accessible</span>, 
                <span className="text-blue-600"> actionable</span>, and 
                <span className="text-indigo-600"> transformative</span>"
              </p>
              <p className="text-gray-600 mb-6">
                Founded by AI researchers and industry practitioners, AI Nexus was born from a simple 
                observation: The gap between theoretical AI and practical implementation is too wide.
              </p>
              <p className="text-gray-600">
                We're creating a new paradigm where experimentation drives education, education informs 
                product development, and products fund further research - a continuous cycle of innovation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-100 to-cyan-50 p-6 rounded-2xl h-48 flex flex-col justify-end">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="font-bold text-blue-900">Experiment</h3>
                <p className="text-sm text-gray-600">Pushing AI boundaries</p>
              </div>
              <div className="bg-gradient-to-br from-cyan-100 to-blue-50 p-6 rounded-2xl h-48 flex flex-col justify-end">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-blue-900">Educate</h3>
                <p className="text-sm text-gray-600">Democratizing AI knowledge</p>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-50 p-6 rounded-2xl h-48 flex flex-col justify-end">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-bold text-blue-900">Engineer</h3>
                <p className="text-sm text-gray-600">Building AI solutions</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-50 p-6 rounded-2xl h-48 flex flex-col justify-end">
                <div className="text-4xl mb-4">♻️</div>
                <h3 className="font-bold text-blue-900">Evolve</h3>
                <p className="text-sm text-gray-600">Continuous innovation cycle</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experiments */}
      <section id="experiments" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">AI Research Lab</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Where we test the boundaries of what's possible. Our open experiments drive everything we do.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Generative Frontier",
                desc: "Exploring creative AI applications in art, music, and design",
                status: "Live Experiment",
                tag: "GenAI"
              },
              {
                title: "Ethical AI Framework",
                desc: "Developing accountability systems for responsible AI deployment",
                status: "Research Phase",
                tag: "Ethics"
              },
              {
                title: "Edge Intelligence",
                desc: "Making complex AI models run efficiently on low-power devices",
                status: "Prototyping",
                tag: "Deployment"
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="h-48 bg-gray-200 border-2 border-dashed w-full" />
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
                        {exp.tag}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    </div>
                    <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                      {exp.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.desc}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                    Follow Progress 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
              Visit Our Research Hub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Education That Reflects Reality</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our courses are born from real experiments and product development. 
                Learn what actually works in the field, not just theory.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Applied AI Certification",
                    desc: "12-week intensive with our product team",
                    badge: "Most Popular"
                  },
                  {
                    title: "Generative AI Studio",
                    desc: "Hands-on creative AI implementation",
                    badge: "New"
                  },
                  {
                    title: "Ethical Deployment Lab",
                    desc: "Responsible AI production techniques",
                    badge: "Limited Access"
                  }
                ].map((course, index) => (
                  <div key={index} className="border-l-4 border-cyan-500 pl-4 py-2">
                    <div className="flex justify-between">
                      <h3 className="font-bold text-lg text-gray-900">{course.title}</h3>
                      {course.badge && (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-cyan-100 text-cyan-800">
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600">{course.desc}</p>
                  </div>
                ))}
              </div>
              
              <button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity">
                Browse Curriculum
              </button>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">AI Products Shaped by Research</h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Commercial applications that emerged directly from our experimental work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-cyan-300 text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold mb-2">NeuroSight Analytics</h3>
              <p className="text-blue-200 mb-6">
                Predictive analytics platform born from our neural network experiments
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">Real-time insights</span>
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">Anomaly detection</span>
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">API-first</span>
              </div>
              <button className="text-white font-medium hover:text-cyan-300 flex items-center">
                View Case Study 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-cyan-300 text-5xl mb-4">🖌️</div>
              <h3 className="text-xl font-bold mb-2">Genera Studio Pro</h3>
              <p className="text-blue-200 mb-6">
                Creative suite powered by our generative AI research
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">Text-to-3D</span>
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">Style transfer</span>
                <span className="bg-cyan-900 text-cyan-100 px-3 py-1 rounded-full text-sm">Collaboration</span>
              </div>
              <button className="text-white font-medium hover:text-cyan-300 flex items-center">
                View Demo 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-blue-200 mb-6">
              Our products fund further research and education, creating a sustainable innovation cycle
            </p>
            <div className="inline-flex items-center justify-center bg-blue-800 rounded-full p-1">
              <div className="bg-cyan-500 rounded-full p-2 mx-1">Research</div>
              <div className="mx-2 text-blue-300">→</div>
              <div className="bg-blue-600 rounded-full p-2 mx-1">Education</div>
              <div className="mx-2 text-blue-300">→</div>
              <div className="bg-indigo-500 rounded-full p-2 mx-1">Products</div>
              <div className="mx-2 text-blue-300">→</div>
              <div className="bg-purple-500 rounded-full p-2 mx-1">Funding</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the AI Evolution</h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Whether you're a learner, researcher, or business - become part of our ecosystem 
            where AI innovation happens at every level.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-full hover:bg-gray-100 font-semibold">
              Enroll in Courses
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 font-semibold">
              Partner with Labs
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 font-semibold">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12" />
                <h4 className="text-white font-bold text-xl ml-3">AI Nexus</h4>
              </div>
              <p className="text-sm mb-6 max-w-md">
                Bridging AI research, education, and application to create 
                sustainable technological advancement.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin', 'youtube'].map((platform) => (
                  <a key={platform} href="#" className="text-gray-400 hover:text-white">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-8 h-8" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Research</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Experiments</a></li>
                <li><a href="#" className="hover:text-white">Publications</a></li>
                <li><a href="#" className="hover:text-white">Open Source</a></li>
                <li><a href="#" className="hover:text-white">Lab Partnerships</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Education</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Courses</a></li>
                <li><a href="#" className="hover:text-white">Certifications</a></li>
                <li><a href="#" className="hover:text-white">Corporate Training</a></li>
                <li><a href="#" className="hover:text-white">Research Fellowship</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Solutions</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">AI Products</a></li>
                <li><a href="#" className="hover:text-white">Custom Development</a></li>
                <li><a href="#" className="hover:text-white">Consulting</a></li>
                <li><a href="#" className="hover:text-white">Case Studies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <div className="mb-4">
              <span className="inline-block mx-4">hello@ainexus.ai</span>
              <span className="inline-block mx-4">San Francisco, CA</span>
              <span className="inline-block mx-4">Research • Educate • Build</span>
            </div>
            © {new Date().getFullYear()} AI Nexus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};