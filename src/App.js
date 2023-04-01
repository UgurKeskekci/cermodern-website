import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Highlights from './components/Highlights';
import Carousel from './components/Carousel';
import Recommendations from './components/Recommendations';
import Blogcontents from './components/Blogcontents';

function App() {
  return (
    <div>
       
        <Navbar/>
        <Introduction/>
        <Highlights/>
        <Recommendations/>
        <Blogcontents/>

    </div>
  );
}

export default App;
