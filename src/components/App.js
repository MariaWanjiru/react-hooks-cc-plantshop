import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import PlantPage from "./PlantPage";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/" component={PlantPage} />
        
      </Switch>
    </Router>
  );
}

export default App;