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
import Departments from './Pages/Departments/Departments';
import Appointements from './Pages/Appointments/Appointements';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/Aboutus/AboutUs';
import Faq from './Pages/Faq/Faq';
import Contact from './Pages/Contact/Contact';
import AllDoctors from './Pages/AllDoctors/AllDoctors/AllDoctors';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';

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
            <Route path='/departments'>
              <Departments></Departments>
            </Route>
            <PrivateRoute path='/details/:id'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path='/appointment/:id'>
              <Appointements></Appointements>
            </PrivateRoute>
            <PrivateRoute path='/appointment'>
              <Appointements></Appointements>
            </PrivateRoute>
            <Route path='/doctors'>
              <AllDoctors></AllDoctors>
            </Route>
            <Route path='/about'>
              <AboutUs></AboutUs>
            </Route>
            <Route path='/faq'>
              <Faq></Faq>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
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
