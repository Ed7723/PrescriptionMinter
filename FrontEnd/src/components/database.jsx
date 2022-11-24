import { Navbar } from "./components/navbar";
import Inputform  from "./components/inputform";
import Database from "./components/database";
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';

export default function Database() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path = "/database">
          <Database />
        </Route>
      </Switch>
      <Inputform/>
    </BrowserRouter>
  );
}
