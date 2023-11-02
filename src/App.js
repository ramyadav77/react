import './App.css';
import {  Route,  BrowserRouter as Router ,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
    <>
    <Router>
      <Navigation/>
      
        <Routes>
        <Route path="/" Component={Home} exact> </Route>
        <Route path="/cart" Component={Cart}></Route>
        <Route path="/products" Component={Products}> </Route>
        </Routes>
      
    </Router>
    </>
  );
}

export default App;
