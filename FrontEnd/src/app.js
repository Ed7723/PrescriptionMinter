import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Features } from "./components/features";
import Inputform  from "./components/inputform";
import Database from "./components/database";
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path = "/database">
          <Database />
        </Route>
        <Route path = "/">
          <Database />
        </Route>
      </Switch>
      <Hero />
      <Features />
      <Inputform/>
    </BrowserRouter>
    </>
  );
}

export default App;