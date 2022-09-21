
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Sidebar from './components/sidebar/Sidebar';
import Education from './components/education/Education';
import Works from './components/works/Works';
import Contact from './components/contact/Contact';
function App() {

  return (
    <div className="App">
      <Sidebar/>
      <main>
      <Home/>
      <About/>
      <Education/>
      <Works/>
      <Contact/>
      </main>
    </div>
  );
}

export default App;
