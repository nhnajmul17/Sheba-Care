import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Error from './Pages/Error/Error';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='*'>
              <Error></Error>
            </Route>

          </Switch>
        </Router>

      </AuthProvider>

    </div>
  );
}

export default App;
