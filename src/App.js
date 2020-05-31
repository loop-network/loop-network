import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Matching, SignIn, SignUp } from "./components";

import { AuthProvider } from "./firebase/Auth";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/about" exact component={() => <About />} />
            <Route path="/matching" exact component={() => <Matching />} />
            <Route path="/signin" exact component={() => <SignIn />} />
            <Route path="/signup" exact component={() => <SignUp />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;