import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Resume from './components/resume/Resume';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Contact from './components/contact/Contact';
import NotFound from './components/notfound/NotFound';

class App extends Component{

render() {
  return (
    <Router>
            <Switch>
            <Route exact path='/'
            component={Home}
             />
            <Route exact path='/portfolio' 
            component={Portfolio} 
            />
            <Route exact path='/resume' 
            component={Resume} 
            />
            <Route exact path='/about' 
            component={About} 
            />
            <Route exact path='/contact' 
            component={Contact} 
            />
            <Route component={NotFound}/>
            </Switch>
    </Router>
  );
}

}

export default App;

