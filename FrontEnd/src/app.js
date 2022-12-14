import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import { Inputform } from "./components/inputform";
import { DatabaseTable } from "./components/database";
import { Home } from "./components/home";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { About } from "./components/about";
import { Footer } from "./components/footer";
import Login  from "./components/login";
import {Prescriptform} from './components/prescriptionform';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} ></Route>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/database" element={<DatabaseTable />} ></Route>
          <Route path="/input" element={<Inputform />} ></Route>
          <Route path="/newprescript" element={<Prescriptform />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/features" element={<Features />} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;