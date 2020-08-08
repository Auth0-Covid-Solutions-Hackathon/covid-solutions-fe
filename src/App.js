import React from 'react';
import './App.css';
import Nav from './components/nav.js'
import Card from './components/company-grid.js'
import Footer from './components/footer.js'


function App() {
  return (
    <div className="App">
      <Nav />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
