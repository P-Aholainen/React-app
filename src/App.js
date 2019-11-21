import React, { Component } from 'react';
/*Tuodaan browserRouter ja annetaan sille aliakset */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics';
import { Provider } from './context';

import './App.css';


/*React.Fragment tagi toimii feikkielementtinä, eikä näy dom- puussa */
class App extends Component  {
  render() {
    return(
    <Provider>
      <Router>
      <React.Fragment>
        <Navbar />
          <div className="container">
            <Switch>
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
  dotenv*/