import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CurrentTeam from "./current-team";
import Team from './components/team'



function App() {
  return (
    <Router>

      <Route path="/" exact component={Team}></Route>
    </Router>
  );
}

export default App;
      //  <Route path="/" exact component={CurrentTeam}></Route>
