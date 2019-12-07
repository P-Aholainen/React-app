/*Tuodaan React componetti */
import React, { Component } from 'react';
/*Tuodaan browserRouter ja annetaan sille aliakset */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//Tuodaan navbar
import Navbar from './components/layout/Navbar'
/*Tuodaan Index.js */
import Index from './components/layout/Index'
/*Tuodaan Lyrics */
import Lyrics from './components/tracks/Lyrics';
/*Tuodaan context komponentissa luotu provider */
import { Provider } from './context';

import './App.css';



class App extends Component  {
  render() {
    return(
     /*Ympäröidään tagit Provider tagilla */ 
    <Provider>
      <Router>
        {/*React.Fragment tagi toimii feikkielementtinä, eikä näy dom- puussa */}
      <React.Fragment>
     {/*renderöidään navbar*/}
        <Navbar />
          <div className="container">
            {/*Jotta route toimii halutulla tavalla, täytyy se ympäröidä switch tageilla. */}
            <Switch>
              {/*Annetaan tarkka polku routterille*/}
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
      </React.Fragment>
      </Router>
    </Provider>
    );
  };
};
export default App;
/*Ladattu laajennus react-native snippeteille
  Asennettu react-router-dom
  Asennettu axios
  Asennettu dotenv*/