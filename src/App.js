// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import GlobalStyle from './globalStyles';
import HomePage from './Pages/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <Router>
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomePage} />
        {/* <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
