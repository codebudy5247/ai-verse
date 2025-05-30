export const TestLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-600">AI Nexus</h1>
            <div className="space-x-6">
              <a href="#learn" className="text-gray-600 hover:text-blue-600">
                Learn
              </a>
              <a href="#build" className="text-gray-600 hover:text-blue-600">
                Build
              </a>
              <a
                href="#contact"
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Where <span className="text-blue-600">AI Learning</span> Meets
              <br />
              Transformative Innovation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Master artificial intelligence and transform your vision into
              intelligent products with our end-to-end solutions.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
                Start Learning
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose AI Nexus?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Comprehensive Learning",
                desc: "Interactive modules with hands-on projects and expert mentorship",
                icon: "🎓",
              },
              {
                title: "End-to-End Development",
                desc: "From concept to deployment - we handle the entire AI lifecycle",
                icon: "🚀",
              },
              {
                title: "Industry Ready Skills",
                desc: "Learn using latest frameworks and real-world case studies",
                icon: "💡",
              },
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                AI Learning Platform
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Beginner to Advanced AI Courses</li>
                <li>✓ Live Coding Sessions</li>
                <li>✓ Project Portfolio Building</li>
                <li>✓ Certification Programs</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold text-blue-600 mb-4">
                AI Product Development
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>✓ Custom AI Solutions</li>
                <li>✓ Machine Learning Pipelines</li>
                <li>✓ NLP & Computer Vision</li>
                <li>✓ Cloud Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cta */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="mb-8 text-lg">
            Join 50,000+ learners and innovators shaping the AI revolution
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">AI Nexus</h4>
              <p className="text-sm">Pioneering AI Education & Solutions</p>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Learning</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Certifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-semibold mb-4">Contact</h5>
              <p className="text-sm">hello@ainexus.ai</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            © 2024 AI Nexus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
