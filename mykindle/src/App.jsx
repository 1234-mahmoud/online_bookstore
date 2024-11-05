import './App.css';
import Author from './components/Author';
import BookInfo from './components/BookInfo';
import BooksList from './components/BooksList';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Statistics from './components/Statistics';
import Video from './components/Video';
import Slider from './components/Slider'
import Form from './components/Form';
import WorldMap from './components/WorldMap';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <BookInfo/>
    <Statistics/>
    <BooksList/>
    <Video/>
    <Author/>
    <Pricing/>
    <Slider/>
    <Form/>
    <WorldMap/>
    <Footer/>
    </div>
  );
}

export default App;
