import PlusSvg from "../assets/PlusSvg";
import Button from "./Button";
import curve from "../assets/curve.png";
import robot from "../assets/robot.jpg";

export const Hero = () => {
  return (
    <section className="relative z-10 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video & Overlay */}
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

      {/* Centered Robot Image */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <img 
          src={robot} 
          className="w-full max-w-3xl h-auto object-contain opacity-30"
          alt="AI Robot"
          style={{
            maxHeight: '70%',
            filter: 'drop-shadow(0 0 20px rgba(10, 230, 255, 0.5))'
          }}
        />
      </div> */}

      {/* Hero Content */}
      <div className="container mx-auto px-6 relative z-20 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight font-orbitron relative inline-block">
          Where <span className="text-cyan-400">AI Experimentation</span> Meets
          <br className="hidden md:block" />
          <span className="relative inline-block">
            Real-World{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 relative inline-block">
              Innovation
              <img
                src={curve}
                className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-[624px] max-w-full"
                alt="Curve underline"
              />
            </span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          We bridge the gap between AI theory and practical application through
          cutting-edge research, transformative education, and intelligent
          products that shape the future.
        </p>

        <Button href="/pricing" white>
          Get started
        </Button>
      </div>
    </section>
  );
};

const BottomLine = () => {
  return (
    <>
      <div className="absolute bottom-4 left-10 right-10 h-[1px] bg-n6 pointer-events-none xl:block hidden" />
      <PlusSvg className="absolute bottom-[12px] left-[2.1875rem] z-20 pointer-events-none xl:block hidden" />
      <PlusSvg className="absolute bottom-[12px] right-[2.1875rem] z-20 pointer-events-none xl:block hidden" />
    </>
  );
};
