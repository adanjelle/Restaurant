import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import LoadingScreen from './Components/LoadingScreen/LoadingScreen';
import Login from './Pages/Popup/Login';
import ContactForm from './Pages/ContactForm/ContactForm';
import Admin from './Pages/Admin/Admin';
import Order from './Pages/Order/Order';
import Details from './Pages/Details/Details'
function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <Router>
        <div className='app'>
          <Navbar setShowLogin={setShowLogin} />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Menu' component={Menu} />
            <Route path='/About' component={About} />
            <Route path="/contact" component={ContactForm} />
            <Route path="/admin" component={Admin} />
            <Route path="/order" component={Order} />
            <Route path="/details" component={Details} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
