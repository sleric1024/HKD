import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import TopicSelection from './TopicSelection';
import Login from './Login';
import Suggestion from './Suggestion';

function Main() {
  return (
    <Router>
      <Route path="/welcome/" exact component={Welcome} />
      <Route path="/topic/" exact component={TopicSelection} />
      <Route path="/login/" exact component={Login} />
      <Route path="/suggestion/" exact component={Suggestion} />
    </Router>
  )
}

export default Main;