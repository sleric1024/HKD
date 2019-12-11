import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import TopicSelection from './TopicSelection';

function Main() {
  return (
    <Router>
      <Route path="/welcome/" exact component={Welcome} />
      <Route path="/topic/" exact component={TopicSelection} />
    </Router>
  )
}

export default Main;