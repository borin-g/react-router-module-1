import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './components/About';
import Resume from './components/Resume';
import Error from './components/Error';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <div>
      <NavBar />

      <Switch>
        <Redirect path='/' to='/about' exact />
        <Route path='/about' component={About} />
        <Route path='/resume' component={Resume} />
        <Route path='/projects' component={Projects} />
        <Route path='/contact' component={Contact} />
        <React component={Error} />
      </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;