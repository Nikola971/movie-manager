// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MovieDetailPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
