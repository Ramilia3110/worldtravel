import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./Home";
import Heroes from "./Heroes";
import About from "./About";
import Tips from "./Tips";
import Footer from "./Footer";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div style={{ marginTop: "64px" }}></div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/travelers" component={Heroes} />
          <Route path="/about" component={About} />
          <Route path="/tips" component={Tips} />
        </Switch>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
