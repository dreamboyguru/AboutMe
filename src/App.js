// import logo from './logo.svg';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import smoothscroll from 'smoothscroll-polyfill';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function App() {
  smoothscroll.polyfill();
  return (
    <div className="App">
      <Header />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Skills' element={<Skill />} />
        <Route path='Project' element={<Project />} />
        <Route path='Contact' element={<Contact />} />
      </Routes> */}
      
      <Home />
      <About />
      <Skill />
      <Project />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
