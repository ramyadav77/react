import './App.css';
import {  Route,  BrowserRouter as Router ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
function App() {
  return (
    <>
    <Router>
      <Navigation/>
      
        <Routes>
        <Route path="/" Component={Home} exact> </Route>
        <Route path="/about" Component={About}> </Route>
        <Route path="/" Component={Home}> </Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
