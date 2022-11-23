import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import Inputform from "./inputform";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Inputform/>
    </>
  );
}

export default App;