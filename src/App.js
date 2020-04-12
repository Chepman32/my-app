import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom"
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
import { AlertState } from './contextCopy/AlertState';
import { FirebaseState } from './contextCopy/firebase/FirebaseState';
function App() {
  return (
    <FirebaseState>
    <AlertState>
    <BrowserRouter>
    <Alert/>
    <Navbar/>
    <div className="container pt-4">
      <Switch>
        <Route path={'/'} exact component={Home}></Route>
        <Route path={'/about'} component={About}></Route>
      </Switch>
    </div>
    </BrowserRouter>
    </AlertState>
    </FirebaseState>
  );
}

export default App;
