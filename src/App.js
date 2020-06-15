import React from 'react';
import logo from './nfap.jpg';
import './App.css';

class App extends React.Component {
  render() {  
  return( 
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo"/>
        <h1>Did you fap today? </h1>
        <p>
          <button type="button" class="btn btn-dark btn-lg">Yes?</button>
          <br/>
          <button type="button" class="btn btn-light btn-lg">No.. </button>
        </p>
     </header>
    </div>
    );
  }
}


export default App;
