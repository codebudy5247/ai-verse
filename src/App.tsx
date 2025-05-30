import AINexusLanding from "./components/AiNexusLanding";
import { TestLanding } from "./components/TestLanding";
import { TestLandingg } from "./components/TestLandingg";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ButtonGradient } from "./assets/ButtonGradient";

function App() {
  return (
    <>
      {/* <TestLanding /> */}
      {/* <TestLandingg /> */}
      {/* <AINexusLanding /> */}

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>

      <ButtonGradient />
    </>
  );
}

export default App;
