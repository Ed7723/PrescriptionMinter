import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import {Inputform}  from "./components/inputform";
import {DatabaseTable} from "./components/database";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import {Deleteform}from "./components/deleteform";
import {About} from "./components/about"
import {Footer} from "./components/footer"

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/database" element={<DatabaseTable />} ></Route>
        <Route path = "/input" element={<Inputform/>} ></Route>
        <Route path = "/about" element={<About/>} ></Route>
        <Route path = "/features" element={<Features/>} ></Route>
      </Routes>
      <Hero />
      <Features />
      <Deleteform/>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;