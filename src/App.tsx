import AINexusLanding from "./components/AiNexusLanding";
import { TestLanding } from "./components/TestLanding";
import { TestLandingg } from "./components/TestLandingg";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ButtonGradient } from "./assets/ButtonGradient";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      {/* <TestLanding /> */}
      {/* <TestLandingg /> */}
      {/* <AINexusLanding /> */}

      <div className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
