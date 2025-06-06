import AINexusLanding from "./components/AiNexusLanding";
import { TestLanding } from "./components/TestLanding";
import { TestLandingg } from "./components/TestLandingg";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { ButtonGradient } from "./assets/ButtonGradient";


function App() {
  return (
    <>
      {/* <TestLanding /> */}
      {/* <TestLandingg /> */}
      {/* <AINexusLanding /> */}

      <div className="min-h-screen overflow-hidden">
        <Header />
        <Hero />
        <Manifesto />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
