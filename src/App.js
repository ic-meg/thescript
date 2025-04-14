import{ BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useEffect } from 'react';

import './App.css';
import './tailwind.css';

import Start from './pages/startup';
import Play from './pages/play';
import Shutdown from './components/shutdown';
import Desktop from './components/Desktop/desktop'

function App() {
  useEffect(() => {
    if (window.location.pathname !== '/') {
      window.location.replace('/');
    }
  }, []);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Start} />
        <Route path="/play" component={Play} /> 
        <Route path="/desktop" component={Desktop} />
        <Route path = "/shutdown" component= {Shutdown}/>
      </Switch>
    </Router>
 
  );
}

export default App;
