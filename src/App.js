import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Groups, Volunteer, OfficeHours, SignIn, SignUp, Onboard, Community} from "./components";

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
            <Route path="/community" exact component={() => <Community />} />
            <Route path="/groups" exact component={() => <Groups />} />
            <Route path="/volunteer" exact component={() => <Volunteer />} />
            <Route path="/signin" exact component={() => <SignIn />} />
            <Route path="/signup" exact component={() => <SignUp />} />
            <Route path="/onboard" exact component={() => <Onboard />} />
            <Route path="/officehours" exact component={() => <OfficeHours />} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;