// import React, { Component } from 'react';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/home";
import Save from "./pages/save";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import Hero from "./components/hero";
// import panel from "./components/panel";
// import searchform from "./components/searchform";
// import searchresult from "./components/searchresult";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/save" component={Save} />
        
      </Wrapper>
      <Footer />
    </div>
  </Router>;


export default App;
