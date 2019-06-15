import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Example from "./example";



function App() {
  return (
    <Router>
      <Route path="/" exact component={Example}></Route>
    </Router>
  );
}

export default App;
      // <Route path="/link" component={Link}></Route>
