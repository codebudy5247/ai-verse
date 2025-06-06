import { FlaskConical, GraduationCap, Rocket, RefreshCcw } from "lucide-react";

export const Manifesto = () => {
  return (
    <section id="mission" className="py-10 px-10 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold mb-2 text-accent2">
              Our Manifesto
            </h2>
            <div className="h-1 w-20 bg-accent mb-8"></div>
            <p className="text-2xl font-semibold text-gray-200 mb-6">
              "We believe AI should be{" "}
              <span className="text-cyan-400">accessible</span>,{" "}
              <span className="text-blue-400">actionable</span>, and{" "}
              <span className="text-indigo-400">transformative</span>"
            </p>
            <p className="text-gray-400 mb-6">
              Founded by AI researchers and industry practitioners, AI Nexus was
              born from a simple observation: The gap between theoretical AI and
              practical implementation is too wide.
            </p>
            <p className="text-gray-400">
              We're creating a new paradigm where experimentation drives
              education, education informs product development, and products
              fund further research - a continuous cycle of innovation.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <FlaskConical className="h-10 w-10 mb-4 text-cyan-400" />,
                title: "Experiment",
                desc: "Pushing AI boundaries",
                gradient: "from-blue-900/70 to-cyan-900/50",
              },
              {
                icon: (
                  <GraduationCap className="h-10 w-10 mb-4 text-blue-400" />
                ),
                title: "Educate",
                desc: "Democratizing AI knowledge",
                gradient: "from-cyan-900/70 to-blue-900/50",
              },
              {
                icon: <Rocket className="h-10 w-10 mb-4 text-indigo-400" />,
                title: "Engineer",
                desc: "Building AI solutions",
                gradient: "from-indigo-900/70 to-purple-900/50",
              },
              {
                icon: <RefreshCcw className="h-10 w-10 mb-4 text-purple-400" />,
                title: "Evolve",
                desc: "Continuous innovation cycle",
                gradient: "from-purple-900/70 to-indigo-900/50",
              },
            ].map(({ icon, title, desc, gradient }, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${gradient} p-6 rounded-2xl h-48 flex flex-col justify-end border border-gray-700 hover:border-accent transition-all`}
              >
                {icon}
                <h3 className="font-bold text-accent2">{title}</h3>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
