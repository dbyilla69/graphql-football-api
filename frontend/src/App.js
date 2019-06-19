import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import CurrentTeam from "./current-team";



function App() {
  return (
    <Router>
      <Route path="/" exact component={CurrentTeam}></Route>
    </Router>
  );
}

export default App;

