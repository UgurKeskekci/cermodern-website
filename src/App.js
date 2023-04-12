import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Highlights from './components/Highlights';
import Carousel from './components/Carousel';
import Recommendations from './components/Recommendations';
import Blogcontents from './components/Blogcontents';
import Gallery from './components/Gallery'
import Footer from './components/Footer';
import Discover from './components/Discover';




import Home from './pages/Home';
import Event from './pages/Event';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import Hamburgermenu from './components/Hamburgermenu';


function App() {
  return (
<> 
    <Navbar/>
       
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Event' element={<Event />}/>
          
        </Routes>
    <Footer/>
</>
   
    
  );
}

export default App;
