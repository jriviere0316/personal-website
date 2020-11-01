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
      

      <div class="area" >
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >

      <Header/>
      <Portfolio/>
      <Contact/>
      <Blog/>





    </div>
  );
}

export default App;
