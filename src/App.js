import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Navbar/Navbar';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import LoginPage from './Components/Login/LoginPage/LoginPage';
import CreateAccount from './Components/Login/CreateAccount/CreateAccount';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/news/:newsId">
          <NewsDetails />
        </Route>
        <Route path="/LoginPage">
          <LoginPage />
        </Route>
        <Route path="/CreateAccount">
          <CreateAccount />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
