import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';

import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Header />
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </Router>
    </div>
  );
}

export default App;
