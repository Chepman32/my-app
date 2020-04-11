import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom"
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';
import { Alert } from './components/Alert';
function App() {
  return (
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
  );
}

export default App;
