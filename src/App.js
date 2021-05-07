import React from "react";
//Import Pages
import AboutUs from "./Pages/AboutUs";
import OurWork from "./Pages/OurWork";
import ContactUs from "./Pages/ContactUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
//Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Nav />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>

        <Route path="/work">
          <OurWork />
        </Route>

        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
