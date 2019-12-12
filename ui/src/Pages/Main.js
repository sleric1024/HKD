import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import TopicSelection from './TopicSelection';
import Login from './Login';
import Suggestion from './Suggestion';
import PersionInfo from './PersonInfo';
import Matching from './Matching';

function Main() {
  return (
    <Router>
      <Route path="/welcome/" exact component={Welcome} />
      <Route path="/topic/" exact component={TopicSelection} />
      <Route path="/login/" exact component={Login} />
      <Route path="/suggestion/" exact component={Suggestion} />
      <Route path="/info/" exact component={PersionInfo} />
      <Route path="/matching/" exact component={Matching} />
    </Router>
  )
}

export default Main;