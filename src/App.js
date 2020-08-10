import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import Card from './components/company-grid.js'
import Footer from './components/footer.js'
import {Route, BrowserRouter as Router} from "react-router-dom";
import Register from './components/register-page.js'
import Landing from './components/landingpage.js'

function App() {
  // AOS.init()
  return (
    <div className="App">
      <Router>
      <Nav />
      <Route exact path="/" component={Landing} />
      <Route exact path="/companies" component={Card} />
      <Route exact path="/register" component={Register} />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
