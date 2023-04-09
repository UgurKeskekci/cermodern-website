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

function App() {
  return (
    <div>
       
        <Navbar/>
        <Homepage/>
        
        <Highlights/>
        <Recommendations/>
        <Blogcontents/>
        <Gallery/>
        <Discover/>
        <Footer/>
    </div>
  );
}

export default App;
