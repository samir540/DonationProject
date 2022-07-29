import './App.css';
import Header from './Companents/Header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Home from './pages/Home';
import Partners from './pages/Partners'
import Login from './Companents/Login/Login'
import Register from './Companents/Register/Register'
import DetailsShop from './pages/DetailsShop';
import AddtoBasket from './pages/AddtoBasket';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/donate' element={<Donate />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/details/:id' element={<DetailsShop/>}/>
          <Route path='/addtobasket' element={<AddtoBasket/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
