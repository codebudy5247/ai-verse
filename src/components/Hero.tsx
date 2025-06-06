export const Hero = () => {
  return (
    <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e17]/90 to-[#0a0e17]/60"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dmazwfofy/video/upload/v1746553741/2324166-uhd_3840_2160_25fps_mva6wk.mp4" />
        </video>
      </div>

      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-orbitron">
          Where <span className="text-cyan-400">AI Experimentation</span> Meets
          <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Real-World Innovation
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We bridge the gap between AI theory and practical application through
          cutting-edge research, transformative education, and intelligent
          products that shape the future.
        </p>
      </div>
    </section>
  );
};
