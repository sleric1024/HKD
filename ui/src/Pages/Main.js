import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './Welcome';
import TopicSelection from './TopicSelection';
import Login from './Login';
import Suggestion from './Suggestion';
import PersionInfo from './PersonInfo';
import Matching from './Matching';
import Map from './Map';

function Main() {
  return (
    <Router>
      <Route path="/welcome/" exact component={Welcome} />
      <Route path="/topic/" exact component={TopicSelection} />
      <Route path="/" exact component={Login} />
      <Route path="/login/" exact component={Login} />
      <Route path="/suggestion/" exact component={Suggestion} />
      <Route path="/info/" exact component={PersionInfo} />
      <Route path="/matching/" exact component={Matching} />
      <Route path="/map/" exact component={Map} />
    </Router>
  )
}

export default Main;