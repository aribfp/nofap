import React from 'react'; 
import './App.css';
import Navigation from './component/navigation'; 
import { BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'; 
import Home from './component/home';
import About from './component/about';
import SignUp from './component/signup';

class App extends React.Component {
  render() {  
  return(  
      <Router>
        <div className="App">  
            <Navigation />  
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
              </Switch>   
          </div>
      </Router>
    );
  }
}


export default App;
