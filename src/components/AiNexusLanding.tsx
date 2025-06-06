import { useState, useEffect } from 'react';

const AINexusLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0e17] text-gray-200 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0e17] py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-10 h-10 rounded-lg mr-3"></div>
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 font-orbitron">
                AI Nexus
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#research" className="text-gray-300 hover:text-white transition-colors">
                Research
              </a>
              <a href="#courses" className="text-gray-300 hover:text-white transition-colors">
                Courses
              </a>
              <a href="#products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
              >
                Join Beta
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-[#0a0e17] z-40 flex flex-col items-center justify-center space-y-8">
              <a 
                href="#research" 
                className="text-2xl text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </a>
              <a 
                href="#courses" 
                className="text-2xl text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a 
                href="#products" 
                className="text-2xl text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#about" 
                className="text-2xl text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-2xl bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Beta
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 to-[#0a0e17]/60"></div>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://ciriai-onepage.up2client.com/static/media/video1.070141ef894fbf16cd93.mp4" />
          </video>
        </div>
        
        <div className="container mx-auto px-6 relative z-20 text-center">
          {/* <div className="inline-block bg-[#1a1f2d] border border-cyan-500 rounded-full px-6 py-2 mb-6">
            <span className="flex items-center text-cyan-400">
              <span className="flex h-2 w-2 mr-2">
                <span className="animate-ping absolute h-2 w-2 rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative h-2 w-2 rounded-full bg-cyan-500"></span>
              </span>
              Pioneering AI since 2023
            </span>
          </div> */}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-orbitron">
            Where <span className="text-cyan-400">AI Experimentation</span> Meets 
            <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Real-World Innovation
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            We bridge the gap between AI theory and practical application through cutting-edge research, 
            transformative education, and intelligent products that shape the future.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-500/20">
              Explore Our Research
            </button>
            <button className="bg-[#1a1f2d] border border-cyan-500 text-white px-8 py-4 rounded-xl hover:bg-gray-700/50 transition-colors">
              <span>View Courses</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="inline h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-14 rounded-full border-2 border-cyan-500 flex justify-center">
            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-[#1a1f2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">AI Research Lab</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Where we push the boundaries of artificial intelligence through open experimentation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Generative Frontier",
                desc: "Exploring creative AI applications in art, music, and design",
                status: "Live Experiment",
                tag: "GenAI",
                icon: "🧠"
              },
              {
                title: "Ethical AI Framework",
                desc: "Developing accountability systems for responsible AI deployment",
                status: "Research Phase",
                tag: "Ethics",
                icon: "⚖️"
              },
              {
                title: "Edge Intelligence",
                desc: "Making complex AI models run efficiently on low-power devices",
                status: "Prototyping",
                tag: "Deployment",
                icon: "💻"
              }
            ].map((exp, index) => (
              <div 
                key={index} 
                className="bg-[#0a0e17] border border-cyan-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="text-4xl mb-4">{exp.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{exp.title}</h3>
                <p className="text-gray-400 mb-6">{exp.desc}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-cyan-900/30 text-cyan-400 text-xs px-3 py-1 rounded-full">
                    {exp.tag}
                  </span>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    {exp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300">
              Visit Research Hub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-[#0a0e17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Education That Reflects Reality</h2>
              <p className="text-lg text-gray-400 mb-8">
                Our courses are born from real experiments and product development. 
                Learn what actually works in the field, not just theory.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "Applied AI Certification",
                    desc: "12-week intensive with our product team",
                    badge: "Most Popular",
                    color: "cyan"
                  },
                  {
                    title: "Generative AI Studio",
                    desc: "Hands-on creative AI implementation",
                    badge: "New",
                    color: "blue"
                  },
                  {
                    title: "Ethical Deployment Lab",
                    desc: "Responsible AI production techniques",
                    badge: "Limited Access",
                    color: "purple"
                  }
                ].map((course, index) => (
                  <div 
                    key={index} 
                    className={`bg-[#1a1f2d] border border-${course.color}-500/30 rounded-xl p-6 hover:border-${course.color}-500/50 transition-all`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-bold text-lg text-white">{course.title}</h3>
                      {course.badge && (
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-${course.color}-900/30 text-${course.color}-400`}>
                          {course.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-400">{course.desc}</p>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
                Browse Curriculum
              </button>
            </div>
            
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-full filter blur-3xl z-0"></div>
              <div className="relative z-10 bg-[#1a1f2d] border border-cyan-500/30 rounded-2xl p-6">
                <div className="bg-[#0a0e17] rounded-xl p-4 mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-xl">🎓</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Live Session</h4>
                      <p className="text-sm text-gray-400">Generative AI Workshop</p>
                    </div>
                  </div>
                  
                  <div className="bg-[#1a1f2d] border border-cyan-500/30 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">Instructor</span>
                      <span className="text-sm text-cyan-400">Dr. Elena Torres</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-400">Starts in</span>
                      <span className="text-sm text-white">2 hours 15 min</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a0e17] border border-cyan-500/30 rounded-xl p-4">
                    <div className="text-cyan-400 text-3xl mb-3">📊</div>
                    <h4 className="font-bold text-white mb-1">87%</h4>
                    <p className="text-sm text-gray-400">Completion Rate</p>
                  </div>
                  <div className="bg-[#0a0e17] border border-cyan-500/30 rounded-xl p-4">
                    <div className="text-cyan-400 text-3xl mb-3">⭐</div>
                    <h4 className="font-bold text-white mb-1">4.9/5</h4>
                    <p className="text-sm text-gray-400">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#1a1f2d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">AI Products Shaped by Research</h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Commercial applications that emerged directly from our experimental work
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-[#0a0e17] to-[#1a1f2d] border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🧠</span>
                </div>
                <h3 className="text-xl font-bold text-white">NeuroSight Analytics</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Predictive analytics platform born from our neural network experiments. Transform raw data into actionable intelligence.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">Real-time insights</span>
                <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">Anomaly detection</span>
                <span className="bg-cyan-900/30 text-cyan-400 px-3 py-1 rounded-full text-sm">API-first</span>
              </div>
              
              <button className="text-cyan-400 font-medium hover:text-cyan-300 flex items-center">
                View Case Study 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0e17] to-[#1a1f2d] border border-purple-500/30 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-700 w-14 h-14 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🖌️</span>
                </div>
                <h3 className="text-xl font-bold text-white">Genera Studio Pro</h3>
              </div>
              
              <p className="text-gray-400 mb-6">
                Creative suite powered by our generative AI research. Transform ideas into stunning visual creations.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">Text-to-3D</span>
                <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">Style transfer</span>
                <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">Collaboration</span>
              </div>
              
              <button className="text-purple-400 font-medium hover:text-purple-300 flex items-center">
                View Demo 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Cycle */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e17] to-[#1a1f2d] border-t border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">The Innovation Cycle</h2>
          <p className="text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
            Our products fund further research and education, creating a sustainable innovation ecosystem
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-[#1a1f2d] border border-cyan-500/30 rounded-xl p-6 w-56">
              <div className="bg-cyan-900/30 text-cyan-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="font-bold text-white mb-2">Research</h3>
              <p className="text-gray-400 text-sm">Pushing AI boundaries through experimentation</p>
            </div>
            
            <div className="text-cyan-500 text-3xl hidden md:block">→</div>
            
            <div className="bg-[#1a1f2d] border border-blue-500/30 rounded-xl p-6 w-56">
              <div className="bg-blue-900/30 text-blue-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="font-bold text-white mb-2">Education</h3>
              <p className="text-gray-400 text-sm">Transforming research into practical knowledge</p>
            </div>
            
            <div className="text-blue-500 text-3xl hidden md:block">→</div>
            
            <div className="bg-[#1a1f2d] border border-purple-500/30 rounded-xl p-6 w-56">
              <div className="bg-purple-900/30 text-purple-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-bold text-white mb-2">Products</h3>
              <p className="text-gray-400 text-sm">Building commercial AI solutions</p>
            </div>
            
            <div className="text-purple-500 text-3xl hidden md:block">→</div>
            
            <div className="bg-[#1a1f2d] border border-indigo-500/30 rounded-xl p-6 w-56">
              <div className="bg-indigo-900/30 text-indigo-400 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="font-bold text-white mb-2">Reinvestment</h3>
              <p className="text-gray-400 text-sm">Funding the next research cycle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0a0e17]">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Join the AI Evolution</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're a learner, researcher, or business - become part of our ecosystem 
            where AI innovation happens at every level.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Enroll in Courses
            </button>
            <button className="bg-[#1a1f2d] border border-cyan-500 text-white px-8 py-3 rounded-xl hover:bg-gray-700/50 transition-colors">
              Partner with Labs
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#0a0e17] border-t border-[#1a1f2d] pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-700 w-12 h-12 rounded-lg mr-3"></div>
                <h4 className="text-white font-bold text-xl font-orbitron">AI Nexus</h4>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Bridging AI research, education, and application to create 
                sustainable technological advancement.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'github', 'linkedin', 'youtube'].map((platform) => (
                  <a key={platform} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-[#1a1f2d] flex items-center justify-center">
                      <span className="text-xl">{platform === 'twitter' ? '🐦' : 
                        platform === 'github' ? '💻' : 
                        platform === 'linkedin' ? '👔' : 
                        '🎥'}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Research</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Experiments</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Publications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Open Source</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Lab Partnerships</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Education</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Certifications</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Training</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Research Fellowship</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Solutions</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#1a1f2d] pt-8 text-center">
            <div className="mb-4 flex flex-wrap justify-center gap-4">
              <span className="text-gray-500">hello@ainexus.ai</span>
              <span className="text-gray-500">San Francisco, CA</span>
              <span className="text-gray-500">Research • Educate • Build</span>
            </div>
            <p className="text-gray-600">© 2024 AI Nexus. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AINexusLanding;