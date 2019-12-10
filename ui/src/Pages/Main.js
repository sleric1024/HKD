import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';

function Main() {
  return (
    <Router>
      <Route path="/welcome/" exact component={Welcome} />
    </Router>
  )
}

export default Main;