import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Blog from './Blog';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
function App() {
  return (
    <div className="App">

      <Header/>
      <Portfolio/>
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
