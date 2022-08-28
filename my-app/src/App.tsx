import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Featured from './components/Featured'
import Services from './components/Services'
import Carousel from './components/Carousel'
import Blog from './components/Blog'
import Subscribe from './components/Subscribe'
import Statistics from './components/Statistics'
import Partners from './components/Partners'

function App() {
  return (
    <div className="App">
      <Navbar />   
      <Banner />
      <Featured />
      <Services />
      <Statistics />
      <Partners />
      <Carousel />
      <Blog/>
      <Subscribe />
      <Footer /> 
    </div>
  );
}

export default App;
