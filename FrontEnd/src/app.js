import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import Inputform  from "./components/inputform";
import DatabaseTable from "./components/database";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Deleteform from "./components/deleteform";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path = "/database" element={<DatabaseTable />} ></Route>
        <Route path = "/input" element={<Inputform/>} ></Route>
      </Routes>
      <Hero />
      <Features />
      <Deleteform/>
    </BrowserRouter>
    </>
  );
}

export default App;