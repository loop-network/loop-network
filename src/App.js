import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Matching, Groups } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/matching" exact component={() => <Matching />} />
          <Route path="/groups" exact component={() => <Groups />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;